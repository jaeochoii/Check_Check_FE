export interface Question {
  index: number;
  text: string;
  charCount: number;
}

export interface Company {
  id: number;
  name: string;
  job: string;
  questions: Question[];
  charCount: number;
}
