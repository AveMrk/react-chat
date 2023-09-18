export interface IMessage {
  id: string,
  from: IFrom,
  type: string, // response, message, typing;
  time: string,
  text?: string
}
interface IFrom {
  name: string
}

export interface IMessageInfo {
  from: object,
  message: object
}