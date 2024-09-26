/**
 * Fields in a request to update a single TODO item.
 */
export interface UpdateTodoRequest {
    name: string
    dueDate: string
    status: number
    description: string
}
