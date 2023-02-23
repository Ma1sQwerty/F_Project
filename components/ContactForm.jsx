import React, { MouseEvent } from 'react'

function ContactForm() {
    
    const postContact = async () => {
        const contactInfo = {
            name: 'name',
            email: 'email',
            message: 'message'
        }

        const result = await fetch(`/api/addContact`, {
            body: JSON.stringify(contactInfo),
            method: 'POST'
        })

        const json = await result.json()

        return json
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        postContact()
    }

  return (
    <div>
        <h1 className='mx-10 text-white text-4xl font-semibold font-mono my-5'>Contact</h1>
        <form className='flex flex-col border-2 mx-5 border-blue-600 rounded-3xl items-center' action='https://getform.io/f/78161df5-025d-490f-b042-5607629ae94b' method='POST'>
            <p className='my-4 mx-5 text-xl text-white font-mono xl:text-2xl font-semibold'>Do you want to hire a cascanter for a party or just get in touch with us? Fill the form below!</p>   
            <div  className='flex flex-col mx-10 my-3'>
                <label className='text-xl font-mono font-semibold text-white'>Name:</label>
                <input name='name' required className="w-[calc(100vw-4.5rem)] max-w-4xl my-2 rounded-xl outline-none text-xl p-2 opacity-60 focus:opacity-100 transition-all duration-150" type="text" placeholder='Type here...' />
            </div>
            <div className='flex flex-col mx-10 my-3'>
                <label className='text-xl font-mono font-semibold text-white'>Email:</label>
                <input name='email' required className="w-[calc(100vw-4.5rem)] max-w-4xl my-2 rounded-xl outline-none text-xl p-2 opacity-60 focus:opacity-100 transition-all duration-150" type="text" placeholder='Type here...' />
            </div>
            <div className='flex flex-col mx-10 my-3'>
                <label className='text-xl font-mono font-semibold text-white'>Message:</label>
                <textarea name='message' required className="w-[calc(100vw-4.5rem)] max-w-4xl my-2 rounded-xl outline-none text-xl p-2 opacity-60 focus:opacity-100 transition-all duration-150" rows={10} placeholder='Type here...' />
            </div>
            <button type='submit' className='py-2 px-10 xl:px-20 xl:text-2xl my-5 rounded-md bg-blue-700 hover:bg-blue-800 text-xl transition-all duration-200 font-bold font-mono text-white'>SEND</button>
        </form>
    </div>
  )
}

export default ContactForm