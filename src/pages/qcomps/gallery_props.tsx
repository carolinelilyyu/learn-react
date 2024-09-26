import { ScholarProps } from "@/types/scholar";
import { ListItemProps } from "@/types/scholar";

// Define the ListItem component
const ListItem: React.FC<ListItemProps> = ({ label, content }) => (
  <li>
    <b>{label}: </b>{content}
  </li>
);

function Scholar({person, size=100}: ScholarProps) {
// you can even split ListItem with label and content
  return (
    <section className="profile">
        <h2>{person.name}</h2>
        <img
          className="avatar"
          src={person.pic}
          alt={person.name}
          width={70}
          height={70}
        />
        <ul>
          <ListItem label="Profession" content={person.profession}/>
          <ListItem label="Awards" content={person.awards}/>
          <ListItem label="Discovered" content={person.discovered}/>
        </ul>
      </section>  );
}

export default function Gallery() {
  return (
    <div>
      <h1>Notable Scientists</h1>
      <Scholar 
            person={{ name: 'Caroline', 
              pic: 'https://i.imgur.com/YfeOqp2s.jpg',
              profession: 'software engineering',
              awards: 'Award for software engineers',
              discovered: 'art'
            }}
            size={200} />
    </div>
  );
}

