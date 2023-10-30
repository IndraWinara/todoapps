'use client'

import { Button, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Textarea, useDisclosure } from '@chakra-ui/react'
import React, { useState } from 'react'


const ModalCreate = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const dataInput = { title, description }
    
    const OverlayOne = () => (
        <ModalOverlay
        bg='blackAlpha.300'
        backdropFilter='blur(10px) hue-rotate(90deg)'
        />
        )
    const [overlay, setOverlay] = useState(<OverlayOne />)
        

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
        if(!title && !description){
            alert('Isi dahulu')
            return
        }
        await fetch('/api/topic', {
                method: "POST", headers: { accept: 'application/json' }
                , body: JSON.stringify({title,description})
            })
        onClose()
        setTimeout(()=>{
            window.location.reload()
        },300)
            
        } catch (error) {
            alert(error.message)
        }

    }

    return (
        <>
            <Button
                onClick={() => {
                    setOverlay(<OverlayOne />)
                    onOpen()
                }}
            >
                Create Post
            </Button>
            <Modal isCentered isOpen={isOpen} onClose={onClose}>
                {overlay}
                <ModalContent>
                    <ModalHeader>Create Post</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <div>
                            <form className='flex flex-col gap-2'>
                                <div>
                                    <label>Title</label>
                                    <Input placeholder='title' type='text' value={title} 
                                    onChange={(e)=> setTitle(e.target.value)}
                                    
                                    />
                                </div>
                                <div>
                                    <label>Description</label>
                                    <Textarea placeholder='description' type='text'value={description} 
                                    onChange={(e)=> setDescription(e.target.value)} />
                                </div>
                                <Button onClick={handleSubmit} colorScheme='linkedin'>Create</Button>
                            </form>
                        </div>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    )
}

export default ModalCreate