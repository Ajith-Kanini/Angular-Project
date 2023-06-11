import { IQuiz } from "./Quiz";
export interface ICourse
{
    courseId?: number;
    courseName: string;
    courseDuration: string;
    courseFees: number;
    courseRating:number;
    quizzes?:IQuiz[]
}
