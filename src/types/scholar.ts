export interface ScholarProps {
    person: {name: string,
        pic: string,
        profession: string,
        awards: string,
        discovered: string,
    }, 
    size?: number
}

export interface ListItemProps {
  list: string,
  content: string
}