import TextSlot from "../TextSlot";
import "./Formulario.css";

const Formulario = () => {
  return (
    <section className="formulario">
      <form>
        <h2>Preencha os dados para criar o Card do colaborador</h2>
        <TextSlot label="Nome" placeholder="Digite seu Nome" />
        <TextSlot label="Cargo" placeholder="Digite seu Cargo" />
        <TextSlot label="Imagem" placeholder="Digite o endereço da Imagem" />
      </form>
    </section>
  );
};

export default Formulario;
