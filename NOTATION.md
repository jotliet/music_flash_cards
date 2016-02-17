#Flashcard Notation

##Overview

Flashcards are created in the open source program Lilypond.

[http://www.lilypond.org](http://www.lilypond.org/)

Individual flashcards are exported from Lilpond as .pdf documents. 

The five-line staf inside the .PDF is then vectorized using your favorite vector graphics illustration software (I use Illustrator, but you can use GIMP or any other vector drawing program).

The final vector graphic is then pasted into an empty canvas measuing 500px by 250px and saved as a .PNG image with a transparent background. 

###Lilypond Notation
Lilypond uses a proprietary markdown language for rendering plain-text to .PDF image.

**Treble Clef Chord**

```
\relative c'{
   \clef treble
   <c e g>1
} 
```

**Bass Clef Chord**

```
\relative c'{
  \clef bass
   e,1 e1 e'1
}
```

**Both Staves**

```
\relative c'{
	\new StaffGroup <<
  		\new Staff {
    			a' b c  \bar "||"
      	}
  		\new Staff {
    			\clef bass c,, d e
  	}
	>>
}
```




