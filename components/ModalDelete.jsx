'use client'

import { Button,Modal, ModalBody, ModalCloseButton, ModalContent,ModalHeader, ModalOverlay,useDisclosure } from '@chakra-ui/react'
import React, { useState } from 'react'


const ModalDelete = ({data}) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    
    const OverlayOne = () => (
        <ModalOverlay
        bg='blackAlpha.300'
        backdropFilter='blur(10px) hue-rotate(90deg)'
        />
        )
    const [overlay, setOverlay] = useState(<OverlayOne />)
        

    const handleDelete = async (data) => {

        const postId = data?._id
        try {
        await fetch(`/api/topic?_id=${postId}`, {
                method: "DELETE", headers: { accept: 'application/json' }
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
                colorScheme='red'
                size={'xs'}
            >
                Delete
            </Button>
            <Modal isCentered isOpen={isOpen} onClose={onClose}>
                {overlay}
                <ModalContent>
                    <ModalHeader>Create Post</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                       <div className='flex flex-col gap-4'>
                        <h1>Are you sure delete this post?</h1>
                        <div className='flex gap-2 justify-end'>
                            <Button colorScheme='red' size={'md'} onClick={()=>handleDelete(data)}>Delete</Button>
                            <Button colorScheme='blackAlpha' size={'md'} onClick={onClose}>Cancel</Button> 
                        </div>
                       </div>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    )
}

export default ModalDelete