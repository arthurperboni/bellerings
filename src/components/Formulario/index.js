import Button from "../Button";
import DropDownList from "../DropDownList";
import TextSlot from "../TextSlot";
import "./Formulario.css";

const Formulario = () => {

  const times = [
    'Programação',
    'Front-End',
    'Data Science',
    'Devops',
    'UX e Design',
    'Mobile',
    'Inovação e Gestão'
  ]

  return (
    <section className="formulario">
      <form>
        <h2>Preencha os dados para criar o Card do colaborador</h2>
        <TextSlot label="Nome" placeholder="Digite seu Nome" />
        <TextSlot label="Cargo" placeholder="Digite seu Cargo" />
        <TextSlot label="Imagem" placeholder="Digite o endereço da Imagem" />
        <DropDownList label="Time" itens={times}/>
        <Button />
      </form>
    </section>
  );
};

export default Formulario;
