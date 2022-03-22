import { Modal, Box } from "@mui/material";


const styles = {
    modalBox : {
        backgroundColor: 'white',
    }
}


const Cmodal = () => {
    return (
        <Modal open={true}>
            <Box sx={styles.modalBox}>
                
            </Box>
        </Modal>
    )
};

export default Cmodal;