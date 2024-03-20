export interface Movement {
    name: string,
    value: string,
    type: 'Input' | 'Output',
    id?: string, // ta opcional pq se usar ja esta adicionado ao campo
}