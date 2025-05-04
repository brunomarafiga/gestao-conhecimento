document.addEventListener("DOMContentLoaded", () => {
	// Função para abrir modal
	function abrirModal(modalId) {
		const modal = document.getElementById(modalId);
		if (modal) {
			modal.style.display = "block";
			const submitButton = modal.querySelector(".btn-submit");
			if (submitButton) {
				submitButton.style.display = "block"; // Mostra o botão "Adicionar"
			}
		}
	}

	// Função para fechar modal
	function fecharModal(modal) {
		if (modal) {
			modal.style.display = "none";
		}
	}

	// Adiciona eventos de clique para abrir modais
	const addBookBtn = document.getElementById("addBookBtn");
	if (addBookBtn) {
		addBookBtn.addEventListener("click", () => abrirModal("addBookModal"));
	}

	const addPodcastBtn = document.getElementById("addPodcastBtn");
	if (addPodcastBtn) {
		addPodcastBtn.addEventListener("click", () => abrirModal("addPodcastModal"));
	}

	const addYoutubeChannelBtn = document.getElementById("addYoutubeChannelBtn");
	if (addYoutubeChannelBtn) {
		addYoutubeChannelBtn.addEventListener("click", () =>
			abrirModal("addYoutubeChannelModal")
		);
	}

	const addNewsSiteBtn = document.getElementById("addNewsSiteBtn");
	if (addNewsSiteBtn) {
		addNewsSiteBtn.addEventListener("click", () =>
			abrirModal("addNewsSiteModal")
		);
	}

	// Adiciona eventos de clique para fechar modais
	document.querySelectorAll(".close").forEach((button) => {
		button.addEventListener("click", () => fecharModal(button.closest(".modal")));
	});

	// Fecha modal ao clicar fora dele
	window.addEventListener("click", (event) => {
		if (event.target.classList.contains("modal")) {
			fecharModal(event.target);
		}
	});

	// Função para carregar dados das categorias
	fetch("categorias.json")
		.then((response) => {
			if (!response.ok) {
				throw new Error("Erro ao carregar dados");
			}
			return response.json();
		})
		.then((data) => {
			for (const [categoria, registros] of Object.entries(data)) {
				const categoriaDiv = document.querySelector(
					`.categoria[data-categoria="${categoria}"] .lista-recursos ul`
				);
				if (categoriaDiv) {
					registros.forEach((registro) => {
						const item = document.createElement("li");
						item.classList.add("livro-destaque");
						item.innerHTML = `
    <img src="${registro.capa}" alt="Capa do Livro" class="capa-livro">
    <div>
        <strong><a href="${registro.link}" target="_blank">${registro.titulo}</a></strong><br>
        ${categoria === "Livros" ? `<em>${registro.autor}</em><br>` : ""}
        <p class="descricao-livro">${registro.descricao}</p>
    </div>
`;
						categoriaDiv.appendChild(item);
					});
				}
			}
		})
		.catch((error) => console.error("Erro ao carregar dados:", error));

	// Função para mostrar mais itens
	function mostrarMaisItens(seletor) {
		const lista = document.querySelector(seletor);
		const itens = lista.querySelectorAll(".livro-destaque");
		const btnMostrarMais = lista.parentElement.querySelector(".btn-show-more");

		let itensVisiveis = 5;
		itens.forEach((item, index) => {
			if (index < itensVisiveis) {
				item.style.display = "flex";
			} else {
				item.style.display = "none";
			}
		});

		btnMostrarMais.addEventListener("click", () => {
			itensVisiveis += 5;
			itens.forEach((item, index) => {
				if (index < itensVisiveis) {
					item.style.display = "flex";
				}
			});
			if (itensVisiveis >= itens.length) {
				btnMostrarMais.style.display = "none";
			}
		});
	}

	// Inicializa a função para cada seção
	mostrarMaisItens('.categoria[data-categoria="Livros"] .lista-recursos ul');
	mostrarMaisItens('.categoria[data-categoria="Podcasts"] .lista-recursos ul');
	mostrarMaisItens(
		'.categoria[data-categoria="Canais do YouTube"] .lista-recursos ul'
	);
	mostrarMaisItens(
		'.categoria[data-categoria="Sites de Notícias"] .lista-recursos ul'
	);

	const menuIcon = document.querySelector('.menu-icon');
	const navMenu = document.querySelector('.nav-wrapper ul');

	menuIcon.addEventListener('click', () => {
		navMenu.style.display = navMenu.style.display === 'block' ? 'none' : 'block';
	});

	const toggleThemeButton = document.getElementById('toggle-theme');
	const body = document.body;

	// Define o modo escuro como padrão
	body.classList.add('dark-mode');

	toggleThemeButton.addEventListener('click', () => {
		if (body.classList.contains('dark-mode')) {
			body.classList.remove('dark-mode');
			body.classList.add('light-mode');
		} else {
			body.classList.remove('light-mode');
			body.classList.add('dark-mode');
		}
	});
});

let allBooks = [];
const emptyBookList = document.querySelector("#emptyBookList");
const fields = document.querySelectorAll("input");
const modal = document.querySelector("#myModal");
const modalTitle = document.querySelector("#modalTitle");
const synopsis = document.querySelector("#synopsis");
const txtSynopsis = document.querySelector("#txtSynopsis");
const btnRegister = document.querySelector("#btnRegister");
const btnSearch = document.querySelector("#btnSearch");

function findBook(bookName) {
	return allBooks.findIndex((elem) => elem.bookName === bookName);
}

function showSynopsis(event) {
	if (event.target.id === "btnSinopsys") {
		const bookName = event.target.parentNode.className;
		modalTitle.innerHTML = `Sinopse do livro "${
			allBooks[findBook(bookName)].bookName
		}"`;
		txtSynopsis.innerHTML = allBooks[findBook(bookName)].synopsis;
		modal.style.display = "block";
	}
}

function showError(bookName) {
	const contentModel = document.querySelector("#contentModel");
	modalTitle.innerHTML = `Livro "${bookName}" não encontrado!`;
	txtSynopsis.innerHTML = "";
	contentModel.style.width = "50%";
	modal.style.display = "block";
}

function closeModal(event) {
	modal.style.display = "none";
}

function closeModalWindow(event) {
	if (event.target === modal) {
		modal.style.display = "none";
	}
}

function clearFields() {
	fields.forEach(function (elem) {
		elem.value = "";
	});
	synopsis.value = "";
}

function createCard(
	bookCard,
	bookName,
	bookAuthor,
	bookPublisher,
	numberOfPages,
	bookCover
) {
	bookCard.className = bookName;
	bookCard.innerHTML = `
    <p id="bookTitle">${bookName}</p>
    <img src="${bookCover}"/>
    Autor: ${bookAuthor}
    <br>Editora: ${bookPublisher}
    <br>Págs: ${numberOfPages}
    <button id="btnSinopsys">Sinopse</button>
    <button id="btnRemove">Remover</button>
    `;
}

function appendElements(divSelect, bookCard) {
	const btnCloseModal = document.querySelector("#btnCloseModal");
	divSelect.append(bookCard);
	divSelect.addEventListener("click", showSynopsis);
	btnCloseModal.addEventListener("click", closeModal);
	window.addEventListener("click", closeModalWindow);
}

function removeCard(parentDiv) {
	return function remove(event) {
		if (event.target.id === "btnRemove") {
			const bookName = event.target.parentNode.className;
			parentDiv.removeChild(event.target.parentNode);
			if (allBooks.splice(findBook(bookName), 1)) {
				alert(`Livro "${bookName}" removido com sucesso!`);
			}
		}
	};
}

function registerBook(event) {
	event.preventDefault();
	const listOfAllBooks = document.querySelector("#listOfAllBooks");
	const bookName = document.querySelector("#bookName").value;
	const bookAuthor = document.querySelector("#bookAuthor").value;
	const bookPublisher = document.querySelector("#bookPublisher").value;
	const numberOfPages = Number(document.querySelector("#numberOfPages").value);
	const bookCover = document.querySelector("#bookCover").value;

	allBooks.push({
		bookName,
		bookAuthor,
		bookPublisher,
		numberOfPages,
		bookCover,
		synopsis: synopsis.value
	});

	if (emptyBookList) emptyBookList.remove();
	const bookCard = document.createElement("div");

	createCard(
		bookCard,
		bookName,
		bookAuthor,
		bookPublisher,
		numberOfPages,
		bookCover
	);
	appendElements(listOfAllBooks, bookCard);

	const remove = removeCard(listOfAllBooks);
	listOfAllBooks.addEventListener("click", remove);

	clearFields();
}

function searchBook() {
	const bookNameSearch = document.querySelector("#bookNameSearch").value;
	const listOfBooksSearch = document.querySelector("#listOfBooksSearch");
	const foundBooks = document.querySelector("#foundBooks");

	foundBooks.innerHTML = "";
	listOfBooksSearch.append(foundBooks);

	const found = allBooks.filter((elem) => elem.bookName === bookNameSearch);

	if (found.length !== 0) {
		found.forEach((elem) => {
			const bookCard = document.createElement("div");
			createCard(
				bookCard,
				elem.bookName,
				elem.bookAuthor,
				elem.bookPublisher,
				elem.numberOfPages,
				elem.bookCover
			);
			appendElements(foundBooks, bookCard);
		});
	} else {
		showError(bookNameSearch);
	}

	const remove = removeCard(foundBooks);
	listOfBooksSearch.addEventListener("click", remove);

	clearFields();
}

btnRegister.addEventListener("click", registerBook);
btnSearch.addEventListener("click", searchBook);
