export default function generateList(student, togleTrueOrFalse = 0) {
    for (let i = 0; i < student.visitList.length; i++) {
        if (Math.round(Math.random() + togleTrueOrFalse)) {
            student.present();
        } else {
            student.absent();
        }
    }
}