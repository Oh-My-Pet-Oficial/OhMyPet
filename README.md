> [!NOTE]
> Projeto de estudos onde criamos um website para uma empresa de Pet Care.<br>
> Criamos o Design em conjunto no figma<br>
><a href="https://www.figma.com/design/g7phvNySHY1X4qUNiHTx79/Moodboard-Oh-My-Pet?node-id=380-2&t=8F7wNG4lYa3JLZNB-1">Link do Figma</a><br>
>Os Responsáveis por cada protótipo:<br>
>Home - @Byorks<br>
>Produtos - @IgorMoura<br>
>Adocao - @auditrindade<br>
>Contato - @MarinaRochad<br>
>Serviços - @camilleneves<br>

> [!TIP]
><a href="https://www.figma.com/design/g7phvNySHY1X4qUNiHTx79/Moodboard-Oh-My-Pet?node-id=380-2&t=8F7wNG4lYa3JLZNB-1"><img src="https://i.postimg.cc/RhLK0pJr/Capa.png" alt="Capa manual da marca Oh My Pet!">
></a>
## Accordion 1

```html
<div class="accordion" id="accordionExample">
    <div class="accordion-item">
        <h4 class="accordion-header" id="headingOne">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                Lorem Ipsum
            </button>
        </h4>
        <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne"
            data-bs-parent="#accordionExample">
            <div class="accordion-body">
                <p>
                    Lorem Ipsum
                </p>
            </div>
        </div>
    </div>
    <div class="accordion-item">
        <h4 class="accordion-header" id="headingTwo">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                Lorem Ipsum 2
            </button>
        </h4>
        <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample">
            <div class="accordion-body">
                <p>
                    Lorem Ipsum 2
                </p>
            </div>
        </div>
    </div>
    <div class="accordion-item">
        <h4 class="accordion-header" id="headingThree">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#collapseThree" aria-expanded="false"
                aria-controls="collapseThree">
                Lorem Ipsum 3
            </button>
        </h4>
        <div id="collapseThree" class="accordion-collapse collapse"
            aria-labelledby="headingThree" data-bs-parent="#accordionExample">
            <div class="accordion-body">
                <p>
                    Lorem Ipsum 3
                </p>
            </div>
        </div>
    </div>
</div>
```

## Box Comum
```html
<!-- Box -->
<div class="row">
    <div class="col-lg-6 py-5">
        <div class="box">
            <h3>Box</h3>
            <p>
                Lorem ipsum
            </p>
        </div>
    </div>
    <div class="col-lg-6 py-5">
        <div class="box2">
            <h3>Box Title</h3>
            <p>
            Lorem Ipsum
            </p>
        </div>
    </div>
</div>
```
## Box Importante
```html
<!-- Importante! -->
<div class="col-lg-8 mx-auto py-5">
    <div class="box importante">
        <div class="d-flex justify-content-center d-sm-none mx-auto">
            <i class="bx bi bi-exclamation-circle vermelho-importante bx-tada"></i>
        </div>
        <div class="d-flex  align-items-center container">
        <div class="col-lg-10 p-2">
            <div class="row">
                <h3>Importante!</h3>
                <p>
                Lorem Ipsum
                </p>
            </div>
        </div>
        <div class="col-lg-2 ">
            <div class="d-flex d-none d-sm-block d-md-block d-lg-block">
                <i class="bx bi bi-exclamation-circle vermelho-importante bx-tada"></i>
            </div>
        </div>
    </div>
</div>
```
## Box Saiba mais...
```html
<!-- Saiba mais... -->
<div class="col-lg-8 mx-auto py-5">
    <div class="box saibamais">
        <div class="d-flex justify-content-center d-sm-none mx-auto">
            <i class="bx bi bi bi-search verde-saibamais bx-tada"></i>
        </div>
        <div class="d-flex  align-items-center container">
            <div class="col-lg-10 p-2">
                <div class="row">
                <h3>Saiba mais...</h3>
                <p>
                Lorem Ipsum
                </p>
                </div>
            </div>
            <div class="col-lg-2 ">
                <div class="d-flex d-none d-sm-block d-md-block d-lg-block">
                    <i class="bx bi bi bi-search verde-saibamais bx-tada"></i>
                </div>
            </div>
        </div>
    </div>
</div>
```
## Box Dica
```html
<!-- Dica -->
<div class="col-lg-8 mx-auto py-5">
    <div class="box dica">
        <div class="d-flex justify-content-center d-sm-none mx-auto">
            <i class='bx bx-bulb laranja-dica bx-tada'></i>
        </div>
        <div class="d-flex  align-items-center container">
            <div class="col-lg-10 p-2">
                <div class="row">
                <h3>Dica</h3>
                <p>
                Lorem Ipsum
                </p>
                </div>
            </div>
            <div class="col-lg-2 ">
                <div class="d-flex d-none d-sm-block d-md-block d-lg-block">
                    <i class='bx bx-bulb laranja-dica bx-tada'></i>
                </div>
            </div>
        </div>
    </div>
</div>
```
