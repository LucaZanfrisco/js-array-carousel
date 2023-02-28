# Consegna:

Dato un array contenente una lista di cinque immagini, creare un carosello come nello screenshot allegato.

**MILESTONE 1**

Per prima cosa, creiamo il markup statico: costruiamo il container e inseriamo un’immagine grande al centro: avremo così la struttura base e gli stili pronti per poterci poi concentrare solamente sull’aspetto logico.

**MILESTONE 2**

Adesso rimuoviamo tutto il markup statico e inseriamo tutte le immagini dinamicamente servendoci dell’array fornito e un semplice ciclo for che concatena un template literal.
Tutte le immagini saranno nascoste, tranne la prima, che avrà una classe specifica che la renderà visibile.
Al termine di questa fase ci ritroveremo con lo stesso slider stilato nella milestone 1, ma costruito dinamicamente attraverso JavaScript.

**MILESTONE 3**

Al click dell’utente sulle frecce, il programma cambierà l’immagine attiva, che quindi verrà visualizzata al posto della precedente.

**BONUS 1:**

Aggiungere il ciclo infinito del carosello. Ovvero se è attiva la prima immagine e l’utente clicca la freccia per andare all’immagine precedente, dovrà comparire l’ultima immagine dell’array e viceversa.

**BONUS 2:**

Aggiungere la visualizzazione di tutte le thumbnails sulla destra dell’immagine grande attiva, come nello screenshot proposto. Tutte le miniature avranno un layer di opacità scura, tranne quella corrispondente all’immagine attiva, che invece avrà un bordo colorato.
Al click delle frecce, oltre al cambio di immagine attiva, gestire il cambio di miniatura attiva.

---

## Svolgimento

1. Creare la struttura html
2. Applicare lo stile alla struttura creata 
3. Inserire tutte le immagini e controllare che la struttura in forma statica funzioni
4. Rimuovere le immagini aggiunte in modo statico
5. Definire una variabile che prenda l'elemento in cui inserire le immagini
6. Attraverso un ciclo for creare gli elementi dinamici per le immagini del carosello
7. Selezione e inizializzare in una variabile gli elementi dinamici appena creati
8. Attribuire al primo elemento una classe 'show'
9. Definire due variabile e inzializzare i bottoni per lo slider 
10. Aggiungere un evento ad ogni singolo bottone in modo da cambiare la posizione della classe 'show' in base al bottone cliccato

**Bonus 1:** 

1. Definire una variabile
2. Incrementare o Decrementare la variabile in base al bottone cliccato
3. SE il valore della variabile è uguale all'ultimo elemento immagine rimpostare la variabile al prima immagine disponibile

**Bonus 2:** 

1. Creare nell'html un elemento thumbnail
2. Definire una variabile che prenda l'elemento html 'thumbnail'
3. Attraverso un ciclo creare gli elementi 
4. Definire una variabile contatore
5. Selezionare tutti gli elementi all'interno di 'thumbnail'
6. Applicare al primo elemento una classe
7. Aggiungere agli eventi dei bottoni lo spostamento delle classi in base alla variabile contatore