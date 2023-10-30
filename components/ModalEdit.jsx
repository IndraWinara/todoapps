'use client'

import { Button, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Textarea, useDisclosure } from '@chakra-ui/react'
import { useRouter } from 'next/navigation'

import React, { useState } from 'react'


const ModalEdit = ({item}) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [title, setTitle] = useState(item?.title)
    const [description, setDescription] = useState(item?.description)
    const router = useRouter()
    
    const OverlayOne = () => (
        <ModalOverlay
        bg='blackAlpha.300'
        backdropFilter='blur(10px) hue-rotate(90deg)'
        />
        )
    const [overlay, setOverlay] = useState(<OverlayOne />)
        

    const handleSubmit = async (data) => {
        try {
        await fetch(`/api/topic?id=${data._id}`, {
                method: "PATCH", headers: { accept: 'application/json' }
                , body: JSON.stringify({title,description})
            })
        onClose()

       window.location.reload()

            
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
                colorScheme='green'
                size={'xs'}
            >
                Edit
            </Button>
            <Modal isCentered isOpen={isOpen} onClose={onClose}>
                {overlay}
                <ModalContent>
                    <ModalHeader>Edit Post</ModalHeader>
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
                                <Button onClick={()=>handleSubmit(item)} colorScheme='green'>Edit</Button>
                            </form>
                        </div>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    )
}

export default ModalEdit