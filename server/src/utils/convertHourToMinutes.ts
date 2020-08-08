export default function convertHourToMinutes(time: string){

    const [hour, minutes] = time.split(':').map(Number); //desetruturação
    const timeInMinutes = (hour * 60) + minutes;
    
    return timeInMinutes;
}