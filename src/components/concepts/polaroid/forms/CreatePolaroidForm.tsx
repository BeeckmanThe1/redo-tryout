import {TextField, DialogContentText } from "@suid/material";
import Button from "@suid/material/Button";
import {createSignal} from "solid-js";
import styles from './_createPolaroidForm.module.scss'

// Math.random() -> [0, 1[
// 0 & 10
const getRandomNumber = (min = 0, max = 1) =>  Math.floor(Math.random() * (max - min + 1)) + min
const getLoremPicsum = (x: number, y: number = x) => `https://picsum.photos/${x}/${y}`
const getRandomLoremPicsum = () => {
    const randomX = getRandomNumber(100, 500)
    const randomY = getRandomNumber(100, 500)
    return getLoremPicsum(randomX, randomY)
}
export const CreatePolaroidForm = () => {
    const [form, setForm] = createSignal({})
    const [picsum, setPicsum] = createSignal(getRandomLoremPicsum())
    const handleSubmit = () => {
        console.log('form', form())
    }
    const handleShuffle = () => {
        setPicsum(getRandomLoremPicsum())
    }

    return <form class={styles.createPolaroidForm}>
        {/*<TextField margin={'normal'} label="title"/>
        <TextField margin={'normal'} label="description"/>*/}
        <TextField margin={'normal'} label="url" value={picsum()}/>
        <div class={styles.polaroidWrapper}>
            <img class={styles.polaroid} src={picsum()}/>
        </div>
        <Button onClick={handleSubmit}>Create</Button>
        <Button onClick={handleShuffle}>Different image</Button>
    </form>
}