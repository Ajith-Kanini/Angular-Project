import { ICourse } from "./Course";

export interface IQuiz
{
   quizId?: number;
    quizName?: string;
    quizDifLevel?: string;
    courseId?: number;
    course?: ICourse;
}
