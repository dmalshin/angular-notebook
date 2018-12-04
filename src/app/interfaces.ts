export enum Priority {
  HIGH = 'high',
  NORMAL = 'normal',
  LOW = 'low'
}

export interface Note {
  name: String;
  priority: Priority;
  date: String;
}

