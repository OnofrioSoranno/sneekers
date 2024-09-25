import Navigation from "@/Components/UI/Navigation/Navigation";
import { useState, useRef } from "react";
import { router }  from "@inertiajs/react"; 
import { motion, AnimatePresence } from 'framer-motion';
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function Create({brands}){
    const [formData, setFormData] = useState({
        name:'',
        body:'',
        image: null,
        brand: '', 
    });

    const [message, setMessage] = useState('');

    const handleChange = (e)=>{
        const {name, value, files} = e.target;
        setFormData((prev)=>({
            ...prev,
            [name]: files ? files[0] : value,
        }))
    }


    const handleSubmit = (e)=>{
        e.preventDefault();
        router.post('/article/store', formData ,{
            onSuccess: ()=>{
                
                
                setFormData({
                    name:'',
                    body:'',
                    image: null,
                    brand: '', 
                })
            },
            onError: ()=>{
                
                setMessage('Articolo non inserito!');
                divRef.current.classList.remove('hidden');
            
            }
        })
    }

    const divRef = useRef(null);

    const hiddenDiv = ()=>{
        divRef.current.classList.add('hidden');
    }


    
    return <>
        <Navigation brands = {brands}></Navigation>


        <section className="pt-16 flex justify-center">
            <form className="md:w-1/3 w-3/4 "  encType="multipart/form-data" onSubmit={handleSubmit}>
                <div className="flex justify-center">
                    <h1 className="text-4xl text-primary font-bold border-b-4 border-primary pb-3">Pubblica qui la tua sneekers</h1>
                </div>

                {message && (
                <motion.div
                    className="flex justify-center mt-10"
                    ref={divRef}
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 50 }}
                    transition={{ duration: 1 }}
                    >
                    <div className="w-2/3 bg-red-800 flex relative items-center justify-center h-16 rounded-lg">
                        <FontAwesomeIcon icon={faXmark} className="cursor-pointer absolute top-2 left-3 text-white" onClick={hiddenDiv} />
                        <p className="text-white">{message}</p>
                    </div>
                </motion.div>
            )}

              

                <div className="border-l-4 mt-20 pl-10 flex flex-col border-primary relative before:content-[''] before:h-8 before:w-8 before:rounded-full before:border-2 before:absolute before:border-primary before:left-[0] before:translate-x-[-55%] before:translate-y-[-100%]">
                    <label className="mb-3 text-gray-700 "  htmlFor="">Nome sneekers:</label>
                    <input className="rounded-3xl focus:border:primary w-full border-primary" type="text" name="name" onChange={handleChange} value={formData.name} required />
                </div>

                <div className="border-l-4 mt-8 pl-10 flex flex-col border-primary relative before:content-[''] before:h-8 before:w-8 before:rounded-full before:border-2 before:absolute before:border-primary before:left-[0] before:translate-x-[-55%] before:translate-y-[-100%]">
                    <label className="mb-3 text-gray-700 "  htmlFor="">Descrizione:</label>
                    <input className="rounded-3xl focus:border:primary w-full border-primary" type="text" name="body" onChange={handleChange} value={formData.body} required/>
                </div>

                <div className="border-l-4 mt-8 pl-10 flex flex-col border-primary relative before:content-[''] before:h-8 before:w-8 before:rounded-full before:border-2 before:absolute before:border-primary before:left-[0] before:translate-x-[-55%] before:translate-y-[-100%]">
                    <label className="mb-3 cursor-pointer text-gray-700 "  htmlFor="fileInput">Scegli le immaigini da inserire:</label>
                    <input name="image" onChange={handleChange} required type="file" className="text-gray-700" />
                </div>

                <div className="border-l-4 mt-8 pl-10 flex flex-col border-primary relative before:content-[''] before:h-8 before:w-8 before:rounded-full before:border-2 before:absolute before:border-primary before:left-[0] before:translate-x-[-55%] before:translate-y-[-100%]">
                    <label className="mb-3 text-gray-700"  htmlFor="brand">Scegli il brand delle sneekers:</label>
                    <select name="brand" value={formData.brand} onChange={handleChange} required id="brand" className="rounded-3xl text-gray-700 border-primary">
                        <option>--------</option>
                        {brands.map((brand)=>{
                            return <option key={brand.id} value={brand.id}>{brand.name}</option>
                           
                        })}
                    </select>
                </div>
                <div className="border-l-4 mt-8 pl-10 flex  border-primary relative before:content-[''] before:h-8 before:w-8 before:rounded-full before:border-2 before:absolute before:border-primary before:left-[0] before:translate-x-[-55%] before:translate-y-[-100%]">
                   <button className="bg-primary p-2 rounded-3xl text-white" type="submit">Pubblica annuncio</button>
                </div>
            </form>

        </section>
            
    </>
}