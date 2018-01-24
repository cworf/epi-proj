export class Project {
  constructor(
    public title: string,
    public originator: string,
    public course: string,
    public stage: string,
    public description: string,
    public participants: string[],
    public timesCompleted: number
  ){}
}
