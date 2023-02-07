import { surpriseMePrompts } from "../constants";
import FileSaver from 'file-saver'

export function getRandomPrompt(prompt){
  const rand = Math.floor(Math.random() * surpriseMePrompts.length)
  const randPrompt = surpriseMePrompts[rand]

  if (randPrompt === prompt) 
    return getRandomPrompt(prompt)

  return randPrompt
}

export async function downloadImage(_id, photo){
  FileSaver.saveAs(photo, `download-${_id}.jpg`)
}