import { Container } from "./style";
import { Link } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import { Input } from "../../components/Input";
import { Footer } from "../../components/Footer";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { TextArea } from "../../components/TextArea";
import { TagsInput } from "../../components/TagsInput";
import { ButtonText } from "../../components/ButtonText";
import { RiArrowLeftSLine, RiUpload2Fill } from "react-icons/ri";
import { api } from "../../services/api";

export function Dish() {
    const [isToEdit, setIsToEdit] = useState("")
    const { id } = useParams();

    const [dish, setDish] = useState({});

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");

    const [categories, setCategories] = useState([]);
    const [newCategories, setNewCategories] = useState({ id: 0 });

    const [ingredients, setIngredients] = useState([]);
    const [newIngredients, setNewIngredients] = useState("");

    const [image, setImage] = useState();
    const [imageFile, setImageFile] = useState(null);

    const navigate = useNavigate();

    useEffect(() => {
        if (id) {
            setIsToEdit(true)
        } else {
            setIsToEdit(false)
        }
    }, [id])

    useEffect(() => {
        async function fetchCategory() {
            const response = await api.get(`/categories`)
            setCategories(response.data)
        }

        async function fetchDishById() {
            const response = await api.get(`/dishes/${id}`)
            setDish(response.data)
        }

        fetchCategory()
        if (isToEdit) {
            fetchDishById();
        }

    }, [isToEdit]);

    useEffect(() => {
        if (!dish.id || !categories.length) {
            return
        }

        setName(dish.name)
        setDescription(dish.description)
        setPrice(dish.price)
        setNewCategories(categories.filter(category => { return category.id == dish.category_id })[0])

        const ingredientsName = dish.ingredients.map(ingredient => {
            return ingredient.name
        })
        setIngredients(ingredientsName)
        setImageFile(dish.image)
    }, [dish, categories])

    function handleChangeImage(event) {
        const file = event.target.files[0];
        setImageFile(file);

        const imagePreview = URL.createObjectURL(file);
        setImage(imagePreview);
    }

    function handleAddIngredient() {
        setIngredients(prevState => [...prevState, newIngredients]);
        setNewIngredients("");
    }

    function handleRemoveIngredient(deleted) {
        setIngredients(prevState => prevState.filter(ingredient => ingredient !== deleted));
    }

    async function handleNewDish() {
        if (!name) {
            return alert("Voce esqueceu de adicianar um nome para seu prato.")
        }

        if (!categories) {
            return alert("Voce esqueceu de adicianar uma categoria para seu prato.")
        }

        if (!price) {
            return alert("Voce esqueceu de adicianar uma preço para seu prato.")
        }

        if (newIngredients) {
            return alert("Voce esqueceu de adicianar os ingredientes do seu prato.")
        }

        let body = new FormData();

        body.append("image", imageFile)
        body.append("name", name)
        body.append("description", description)
        body.append("category", parseInt(newCategories.id ? newCategories.id : newCategories))
        body.append("price", price)
        body.append("ingredients[]", ingredients)

        if (isToEdit) {
            await api.put(`/dishes/${id}`, body, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })

            alert("Prato atualizado com sucesso!");
            navigate("/")

        } else {
            await api.post("/dishes", body, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })

            setIngredients([])
            setImageFile(null)
            setName('')
            setDescription('')
            setPrice('')
            setNewCategories({ id: 0 })

            alert("Prato criado com sucesso!");
        }
    }

    async function handleDeleteDish() {
        if (confirm("Tem certeza que deseja deletar esse prato!")) {

            await api.delete(`/dishes/${id}`)

            alert("Prato deletado com sucesso!");
            navigate("/")
        } else {

            return
        }
    }

    return (
        <Container>
            <Header />
            <main>
                <Link to="/">
                    <ButtonText id="buttonText" title="Voltar" icon={RiArrowLeftSLine} />
                </Link>
                {
                    isToEdit ?
                        < h1 > Editar Prato</h1> : < h1 > Novo Prato</h1>
                }

                <div id="boxOne">

                    <div id="inputFile">
                        <label htmlFor="file">Imagem do prato</label>
                        <label htmlFor="arquivo" id="labelFile"><RiUpload2Fill />selecione uma imagem</label>
                        <input
                            type="file"
                            name="arquivo"
                            id="arquivo"
                            placeholder="Selecione imagem"
                            onChange={handleChangeImage}
                        />
                    </div>

                    <div id="inputName">
                        <label htmlFor="name">Nome</label>
                        <Input
                            type="text"
                            id="name"
                            value={name}
                            placeholder="Ex.: Salada Ceasar"
                            onChange={e => setName(e.target.value)}
                        />
                    </div>

                    <div id="inputCategory">
                        <label htmlFor="category">Categoria</label>
                        <div id="select">
                            <select name="input" id="inputSelect" value={newCategories.id} onChange={e => setNewCategories(e.target.value)}>
                                <option value={"Selecione uma categoria"}>Selecione uma categoria</option>
                                {
                                    categories.map((category) => (
                                        <option
                                            key={category.id}
                                            value={category.id}
                                        >
                                            {category.name}
                                        </option>
                                    ))
                                }
                            </select>
                        </div>
                    </div>
                </div>

                <div id="boxTwo">

                    <div id="inputTag">
                        <label htmlFor="addTag" id="label">Ingredientes</label>
                        <div id="inputBg">
                            {
                                ingredients.map((ingredient, index) => (
                                    < TagsInput
                                        key={String(index)}
                                        value={ingredient}
                                        onClick={() => handleRemoveIngredient(ingredient)}
                                    />
                                ))
                            }

                            <TagsInput
                                isNew
                                placeholder="Adicionar"
                                onChange={e => setNewIngredients(e.target.value)}
                                value={newIngredients}
                                onClick={handleAddIngredient}
                            />
                        </div>
                    </div>

                    <div id="inputPrice">
                        <label htmlFor="price">Preço</label>
                        <Input
                            type="number"
                            id="price"
                            value={price}
                            placeholder="R$ 00.00"
                            onChange={e => setPrice(e.target.value)}
                        />
                    </div>

                </div>

                <div id="boxThree">
                    <div id="inputTextArea">
                        <label htmlFor="description">Descrição</label>
                        <TextArea
                            id="description"
                            value={description}
                            placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
                            onChange={e => setDescription(e.target.value)}
                        />
                    </div>
                    {
                        isToEdit ?
                            <div id="buttons">
                                < Button
                                    id="buttonDelete"
                                    title="Excluir prato"
                                    onClick={handleDeleteDish}
                                />
                                < Button
                                    title="Salvar alterações"
                                    onClick={handleNewDish}
                                />
                            </div>
                            :
                            < Button
                                title="Salvar alterações"
                                onClick={handleNewDish}
                            />
                    }
                </div>
            </main>
            <Footer />
        </Container >
    )
}