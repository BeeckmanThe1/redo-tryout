import styles from './_wall.module.scss'
import Button from "@suid/material/Button";
import {Box, Modal, Typography} from "@suid/material";
import {createSignal} from "solid-js";
import useTheme from "@suid/material/styles/useTheme";
import {CreatePolaroidForm} from "../concepts/polaroid/forms/CreatePolaroidForm.tsx";
export const Wall = () => {
    const [open, setOpen] = createSignal()

    const toggleCreatePolaroidModal = () => setOpen(prev => !prev)
    const theme = useTheme();
    return <div>
        <Modal
            open={open()}
            onClose={toggleCreatePolaroidModal}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box
                sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: 400,
                    bgcolor: theme.palette.background.paper,
                    border: "2px solid #000",
                    boxShadow: "24px",
                    p: 4,
                }}
            >
                <CreatePolaroidForm/>
            </Box>
        </Modal>
        <div class={styles.actionMenu}>
            <Button onClick={toggleCreatePolaroidModal}>Create</Button>
        </div>
        <h1>WALL</h1>
    </div>
}