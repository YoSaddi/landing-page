const Sobre = () => {
    return (
        <div className='bg-purple-400'>
            <div className="flex flex-col md:flex-row justify-center items-start px-5 py-16 gap-10 max-w-6xl mx-auto">

                <div className="flex-shrink-0">
                    <img
                        src="https://gadgetforentertainment.com/cdn/shop/collections/tecna.png?v=1738755564"
                        alt="Minha foto"
                        className="w-72 h-72 md:w-80 md:h-80 rounded-full object-cover shadow-lg"
                    />
                </div>

                <div className="md:ml-8 max-w-2xl text-left">
                    <h1 className="text-4xl md:text-5xl font-semibold text-white mb-6">Sobre Mim</h1>
                    <div className="">
                        <p className="text-white text-right mb-4 ">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed beatae velit consequatur, corporis est quod necessitatibus! Veritatis dolor eveniet explicabo neque provident? Neque id repellendus ratione deserunt laudantium corporis qui laboriosam voluptate placeat facilis, aut autem sint nihil tenetur excepturi ad eum velit? Eius, sapiente dicta. Natus.
                        </p>
                        <p className="text-white text-right mb-4 ">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus nostrum doloremque dolor quam ea cum, molestiae tempore, in hic quis voluptatum est repellendus esse doloribus natus quia aliquid nihil! Commodi illum a ab et aspernatur pariatur, nemo hic, debitis rem error omnis recusandae nisi. Asperiores expedita minima quasi animi, facere doloremque reprehenderit. Tempora harum quos facilis nulla?
                        </p>
                    </div>

                </div>
            </div>
        </div>
    )
};

export default Sobre;