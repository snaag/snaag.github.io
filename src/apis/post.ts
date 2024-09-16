import axios, {AxiosResponse} from 'axios';

const baseURL = 'https://pumohr7uq4.execute-api.ap-northeast-2.amazonaws.com/default/blog';

const axiosInstance = axios.create({
    baseURL,
    headers: {
        'Content-Type': 'application/json'
    }
})

export const getLabels = async (): Promise<AxiosResponse<Label[]>> => {
    return axiosInstance.get('/labels');
}

export const getLabelsForOneIssue = async (issueNo: number): Promise<AxiosResponse<Label[]>> => {
    return axiosInstance.get(`/labels?issueNo=${issueNo}`);
}

export const getIssuesByLabel = async (label: string): Promise<AxiosResponse<Issue[]>> => {
    return getIssues(label);
}

export const getIssuesByLabels = async (givenLabels: string[]): Promise<AxiosResponse<Issue[]>> => {
    const labels = givenLabels.map((label: string) => label.trim()).join(",");
    return getIssues(labels);
}

export const getIssues = async (labels?: string) => {
    if(labels) {
        return axiosInstance.get('/issues?labels='+labels);
    }
    return axiosInstance.get('/issues');
}

export const getIssue = async (issueNo: string): Promise<AxiosResponse<Issue>> => {
    return axiosInstance.get(`/issue?issueNo=${issueNo}`)
}

export const getCommentsOfIssue = async (issueNo: string): Promise<AxiosResponse<Comment[]>> => {
    return axiosInstance.get(`/comments?issueNo=${issueNo}`)
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