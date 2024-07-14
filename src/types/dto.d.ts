interface Post {
    markdowns: string[],
    references: string[],
    title: string,
    labels: PostLabel[]
}

interface PostLabel {
    name: string,
    color: string
}