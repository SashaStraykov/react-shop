import React, {useContext} from 'react'
import { Wrapper, Box, ConfirmButton, Title, CancelButton } from './styled'
import {InfoPageContext} from '../../Pages/InfoPage/context';
import {AppContext} from '../../App/Context/Index'


const ConfirmComponent = ({id, title, onDelete}) => {
    const { contextData } = useContext(AppContext);
    const { setConfirmComponent, } = contextData;
    return (
        <Wrapper>
            <Box>
                <Title>Do you really want to delete {title}</Title>
                <ConfirmButton onClick={(e)=> onDelete(e, id)}>Confirm</ConfirmButton>
                <CancelButton onClick={()=>setConfirmComponent(false)}>X</CancelButton>
            </Box>

        </Wrapper>
    )
}

export default ConfirmComponent

