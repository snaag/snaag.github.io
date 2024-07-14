interface Label {
    color: string,
    default: boolean,
    description: string,
    id: number,
    name: string,
    node_id: string,
    url: string
}

interface Issue {
    url: string,
    repository_url: string,
    labels_url: string,
    comments_url: string,
    events_url: string,
    html_url: string,
    id: number,
    node_id: string,
    number: number,
    title: string,
    body: string,
    labels: Label[],
    reactions: Reaction
}

interface Reaction {
    "url": string,
    "total_count": number
    "+1": number
    "-1": number
    "laugh": number
    "hooray": number
    "confused": number
    "heart": number
    "rocket": number
    "eyes": number
}

interface Comment {
    url: string,
    html_url: string,
    issue_url: string,
    id: number,
    created_at: string,
    updated_at: string,
    body: string,
    reactions: Reaction
}

interface LabelCount {
    name: string,
    count: number,
    color: string
}