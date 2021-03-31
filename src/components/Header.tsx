import { GenreResponseProps } from "../components/SideBar"

export function Header(props: { selectedGenre: GenreResponseProps }) {
  return (
    <>
      <header>
        <span className="category">Categoria:<span> {props.selectedGenre.title}</span></span>
      </header>
    </>
  )
}