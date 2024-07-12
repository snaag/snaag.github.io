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
    return authInstance.get( '/labels');
}

export const getLabelsForOneIssue = async (issueNo: number): Promise<AxiosResponse<Label[]>> => {
    return authInstance.get(`/issues/${issueNo}/labels`);
}

export const getIssuesByLabel = async (label: string): Promise<AxiosResponse<Issue[]>> => {
    return getIssuesByLabels([label]);
}

export const getIssuesByLabels = async (labels: string[]): Promise<AxiosResponse<Issue[]>> => {
    const params = {
        page: 1,
        per_page: 100,
        labels: labels.map((label: string) => label.trim()).join(",")
    }
    return authInstance.get('/issues', {params})
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