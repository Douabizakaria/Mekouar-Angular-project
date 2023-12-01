import { Major, Ticket } from '../models/ticket';
import { STUDENTS_MOCKED } from './student.mock';

const dateToday: Date = new Date();

export const TICKETS_MOCKED: Ticket[] = [
  {
    "title": ' ISCAE Casablanca',
    "description": 'Ticket de Nadia ',
    "date": dateToday,
    "student": STUDENTS_MOCKED[3],
    "major": Major.SI,
    "archived": false
  },
  {
    "title": 'EMI Rabat',
    "description": 'Ticket de Zakaria',
    "date": dateToday,
    "student": STUDENTS_MOCKED[2],
    "major": Major.GE,
    "archived": false
  },
  {
    "title": 'FMP Fes',
    "description": 'Ticket de Kenza',
    "date": dateToday,
    "student": STUDENTS_MOCKED[1],
    "major": Major.AI,
    "archived": false
  },
  {
    "title": 'ENCG Settat',
    "description": 'Ticket de Hamza',
    "date": dateToday,
    "student": STUDENTS_MOCKED[4],
    "major": Major.AI,
    "archived": false
  },
];
