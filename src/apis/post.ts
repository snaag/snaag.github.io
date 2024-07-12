import axios, {AxiosResponse} from 'axios';
import data from '../assets/data.json';

const BASE_URL = `https://api.github.com/repos/${data.repository.owner}/${data.repository.repo}`;

export const getLabels = async (): Promise<AxiosResponse<Label[]>> => {
    return axios.get(BASE_URL+'/labels');
}

export const getLabelsForOneIssue = async (issueNo: number): Promise<AxiosResponse<Label[]>> => {
    return axios.get(`${BASE_URL}/issues/${issueNo}/labels`);
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
    return axios.get(`${BASE_URL}/issues`, {params})
}

// 레이블 이름들과, 작성된 이슈들의 갯수를 반환
export const getNamesAndCounts = async (): Promise<DtoNameAndCounts> => {
    const ret: DtoNameAndCounts = {};
    // TODO 정렬을 해서 보내주면 참 좋겠네

    const labels = await getLabels();
    const labelNames = labels.data.map((label: Label) => label.name);

    for(let i=0; i<labelNames.length; i++) {
        const labelName = labelNames[i];
        const issues = await getIssuesByLabel(labelName);
        const count = issues.data.length;
        if(count > 0) {
            ret[labelName] = count;
        }
    }

    return ret;
}