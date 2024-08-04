export type Status = 'todo' | 'progress' | 'under review' | 'finished';
export type Priority = 'urgent' | 'low' | 'medium';

export interface Todo {
  id: string;
  status: Status;
  priority: Priority;
  calendar: string;
  description: string;
}

export const appUrl = 'http://localhost:3000';

export const todos: Todo[] = [
  {
    id: '1',
    status: 'todo',
    priority: 'urgent',
    calendar: '2024-07-31',
    description: 'Finish the documentation for the new feature.',
  },
  {
    id: '2',
    status: 'progress',
    priority: 'medium',
    calendar: '2024-08-01',
    description: 'Implement the new authentication flow.',
  },
  {
    id: '3',
    status: 'under review',
    priority: 'low',
    calendar: '2024-08-02',
    description: 'Review the code for the recent bug fix.',
  },
  {
    id: '4',
    status: 'finished',
    priority: 'urgent',
    calendar: '2024-07-30',
    description: 'Deploy the latest version to production.',
  },
  {
    id: '5',
    status: 'todo',
    priority: 'low',
    calendar: '2024-08-03',
    description: 'Update the project roadmap.',
  },
  {
    id: '6',
    status: 'progress',
    priority: 'medium',
    calendar: '2024-08-04',
    description: 'Fix the UI issue reported in the last sprint.',
  },
  {
    id: '7',
    status: 'under review',
    priority: 'urgent',
    calendar: '2024-08-05',
    description: 'Prepare the release notes for the upcoming version.',
  },
  {
    id: '8',
    status: 'finished',
    priority: 'low',
    calendar: '2024-07-29',
    description: 'Complete the post-release review meeting.',
  },
];
