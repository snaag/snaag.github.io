import axios, {AxiosResponse} from 'axios';
import data from '../assets/data.json';

const baseURL = `https://api.github.com/repos/${data.repository.owner}/${data.repository.repo}`;

const authInstance = axios.create({
    baseURL,
    headers: {
        Authorization: `Bearer ${process.env.REACT_APP_TOKEN}`
    }
})

export const getLabels = async (): Promise<AxiosResponse<Label[]>> => {
    return authInstance.get('/labels');
}

export const getLabelsForOneIssue = async (issueNo: number): Promise<AxiosResponse<Label[]>> => {
    return authInstance.get(`/issues/${issueNo}/labels`);
}

export const getIssuesByLabel = async (label: string): Promise<AxiosResponse<Issue[]>> => {
    const params = {
        labels: label
    };

    return getIssues(params);
}

export const getIssuesByLabels = async (labels: string[]): Promise<AxiosResponse<Issue[]>> => {
    const params = {
        labels: labels.map((label: string) => label.trim()).join(",")
    };

    return getIssues(params);
}

export const getIssues = async (givenParams: { [key: string]: any } = {}) => {
    const params = {
        page: 1,
        per_page: 100,
        ...givenParams
    }

    return authInstance.get('/issues', {params})
}

export const getIssue = async (issueNo: string): Promise<AxiosResponse<Issue>> => {
    return authInstance.get(`/issues/${issueNo}`)
}

export const getCommentsOfIssue = async (issueNo: string): Promise<AxiosResponse<Comment[]>> => {
    return authInstance.get(`/issues/${issueNo}/comments`)
}


// issue 와 comment, label 을 모아서 반환
export const getPost = async (issueNo: string) => {
    const ret: Post = {
        markdowns: [],
        references: [],
        title: "",
        labels: []
    };

    const issue = await getIssue(issueNo);
    const comments = await getCommentsOfIssue(issueNo);

    const issueMarkdowns = [];
    issueMarkdowns.push(issue.data.body);

    comments.data.forEach((comment) => {
        issueMarkdowns.push(comment.body);
    })

    issueMarkdowns.forEach((issueMarkdown) => {
        if (issueMarkdown.includes("## Reference")) {
            ret.references = issueMarkdown
                .replace("## Reference", "")
                .split("- ")
                .filter((_) => _.startsWith("https://"))
                .map((_) => _.replace(/[\r\n]+/g, ''))

        } else {
            ret.markdowns.push(issueMarkdown);
        }
    })

    ret.title = issue.data.title;
    ret.labels = issue.data.labels.map((label) => ({
        name: label.name,
        color: label.color
    }));

    return ret;
}

// 레이블 이름들과, 작성된 이슈들의 갯수를 반환
export const getLabelCounts = async (): Promise<LabelCount[]> => {
    const ret = [];

    const labels = await getLabels();

    for (let i = 0; i < labels.data.length; i++) {
        const labelName = labels.data[i].name;
        const labelColor = labels.data[i].color;
        const issues = await getIssuesByLabel(labelName);
        const count = issues.data.length;
        if (count > 0) {
            ret.push({
                name: labelName,
                count,
                color: labelColor
            });
        }
    }

    ret.sort((a: LabelCount, b: LabelCount) =>
        a.count > b.count ? -1 :
            a.count < b.count ? 1 :
                0
    )
    return ret;
}