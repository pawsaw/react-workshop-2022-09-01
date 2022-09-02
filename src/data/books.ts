import { Book } from '../domain/books';

export const books: Book[] = [
  {
    id: '9781430246206',
    title: 'Realtime Web Apps',
    subtitle: 'With HTML5 WebSocket, PHP, and jQuery',
    isbn: '9781430246206',
    abstract:
      "Realtime Web Apps: With HTML5 WebSocket, PHP, and jQuery is a guide for beginner- to intermediate-level web developers looking to take the next leap forward in website and app development: realtime.With Realtime Web Apps, you'll be able to quickly get up to speed on what HTML5 WebSocket does, how it...",
    author: 'Jason Lengstorf, Phil Leggetter',
    publisher: 'Apress',
    price: '$34.47',
    numPages: 312,
    cover: 'http://localhost:4730/covers/9781430246206.png',
    userId: 1,
  },
  {
    id: '9781430257820',
    title: 'Pro ASP.NET Web API Security',
    subtitle: 'Securing ASP.NET Web API',
    isbn: '9781430257820',
    abstract:
      'ASP.NET Web API is a key part of ASP.NET MVC 4 and the platform of choice for building RESTful services that can be accessed by a wide range of devices. Everything from JavaScript libraries to RIA plugins, RFID readers to smart phones can consume your services using platform-agnostic HTTP.Fortunatel...',
    author: 'Badrinarayanan Lakshmiraghavan',
    publisher: 'Apress',
    price: '$33.55',
    numPages: 416,
    cover: 'http://localhost:4730/covers/9781430257820.png',
    userId: 1,
  },
];
