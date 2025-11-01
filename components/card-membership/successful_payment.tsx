export const SuccessfulPayment = () => {
  return (
    <div className=" text-card-foreground px-6 text-center">
      <div className="min-w-[450px] backdrop-blur-md p-10">
        <h1 className="text-4xl text-secondary font-extrabold mb-4 tracking-wider">
          ¡Compra realizada con éxito!
        </h1>

        <p className="text-lg text-muted-foreground leading-relaxed mb-6">
          Nos alegra darte la bienvenida a <span className="font-bold text-accent">ESPARTA</span>, 
          un lugar donde la fuerza y la disciplina se convierten en estilo de vida.
        </p>

        <p className=" mb-6 text-muted-foreground">
          Tu membresía ya está activa. Explora tus beneficios, entrena con pasión 
          y alcanza tu mejor versión.
        </p>

        <p className="text-xl font-semibold text-accent">
          ¡Gracias por elegirnos!
        </p>

        {/* <button
          onClick={() => (window.location.href = "/")}
          className="mt-8 bg-yellow-400 text-gray-900 font-bold py-3 px-8 rounded-full hover:bg-yellow-300 transition-all"
        >
          Volver al inicio
        </button> */}
      </div>
    </div>
  )
}
