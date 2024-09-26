import { AvatarProps } from "@/types/avatar";

//there will always only be one props. props is ONE object
//the type of AvatarProps has to match with the input props
function Avatar({person, size=100}: AvatarProps) {

  //or like function Avatar(props: AvatarProps){
  // const {person, size=100}}
  // functions defined with long list of parameters are hard to read. this is code smell
  return (
    <img
      className="avatar"
      src={'https://i.imgur.com/' + person.imageId + 's.jpg'}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}
export default function Profile() {
  return (
    <div>
        <Avatar
            person={{ name: 'Woon sen', imageId: 'OKS67lh'}}
            size={200} />
        <Avatar
            person={{ name: 'Ron Ayah', imageId: 'YfeOqp2'}}
            size={150} />
        <Avatar
            person={{ name: 'Pani Dom', imageId: '1bX5QH6'}} />
    </div>
  );
}