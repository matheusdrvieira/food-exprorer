import { Container, BoxOrderMobile, BoxOrderDesktop } from "./style";
import { NewHeader } from "../../components/NewHeader"
import { Footer } from "../../components/Footer"
import { useState, useEffect } from "react"
import { WINDOW_MOBILE_WIDTH } from "../../utils/constants"

export function OrderHistory() {
    const [isAdm, setIsAdm] = useState("")
    const [isMobile, setIsMobile] = useState([
        window.innerWidth
    ]);

    useEffect(() => {
        setIsAdm(false)
    })

    useEffect(() => {
        const handleWindowResize = () => {
            setIsMobile(window.innerWidth);
        };

        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    })

    return (
        <Container>
            <NewHeader />

            {
                isMobile < WINDOW_MOBILE_WIDTH ?
                    <main>
                        <h2>Histórico de pedidos</h2>
                        {
                            isAdm ?
                                <>
                                    <BoxOrderMobile>
                                        < div className="boxHeade">
                                            <div>
                                                <span>{`000004`}</span>
                                            </div>

                                            <div>
                                                <span>{`20/05 às 18h00`}</span>
                                            </div>
                                        </div>

                                        <div>
                                            <p>{`1 x Salada Radish, 1 x Torradas de Parma, 1 x Chá de Canela, 1 x Suco de Maracujá`}</p>
                                        </div>

                                        <div className="select">
                                            <select>
                                                <option value="🟡 Pendente">🟡 Pendente</option>
                                                <option value="🟠 Preparando">🟠 Preparando</option>
                                                <option value="🟢 Entregue">🟢 Entregue</option>
                                                <option value="🔴 Cancelado">🔴 Cancelado</option>
                                            </select>
                                        </div>
                                    </BoxOrderMobile>
                                    <BoxOrderMobile>
                                        < div className="boxHeade">
                                            <div>
                                                <span>{`000004`}</span>
                                            </div>

                                            <div>
                                                <span>{`20/05 às 18h00`}</span>
                                            </div>
                                        </div>

                                        <div>
                                            <p>{`1 x Salada Radish, 1 x Torradas de Parma, 1 x Chá de Canela, 1 x Suco de Maracujá`}</p>
                                        </div>

                                        <div className="select">
                                            <select>
                                                <option value="🟡 Pendente">🟡 Pendente</option>
                                                <option value="🟠 Preparando">🟠 Preparando</option>
                                                <option value="🟢 Entregue">🟢 Entregue</option>
                                                <option value="🔴 Cancelado">🔴 Cancelado</option>
                                            </select>
                                        </div>
                                    </BoxOrderMobile>
                                    <BoxOrderMobile>
                                        < div className="boxHeade">
                                            <div>
                                                <span>{`000004`}</span>
                                            </div>

                                            <div>
                                                <span>{`20/05 às 18h00`}</span>
                                            </div>
                                        </div>

                                        <div>
                                            <p>{`1 x Salada Radish, 1 x Torradas de Parma, 1 x Chá de Canela, 1 x Suco de Maracujá`}</p>
                                        </div>

                                        <div className="select">
                                            <select>
                                                <option value="🟡 Pendente">🟡 Pendente</option>
                                                <option value="🟠 Preparando">🟠 Preparando</option>
                                                <option value="🟢 Entregue">🟢 Entregue</option>
                                                <option value="🔴 Cancelado">🔴 Cancelado</option>
                                            </select>
                                        </div>
                                    </BoxOrderMobile>
                                    <BoxOrderMobile>
                                        < div className="boxHeade">
                                            <div>
                                                <span>{`000004`}</span>
                                            </div>

                                            <div>
                                                <span>{`20/05 às 18h00`}</span>
                                            </div>
                                        </div>

                                        <div>
                                            <p>{`1 x Salada Radish, 1 x Torradas de Parma, 1 x Chá de Canela, 1 x Suco de Maracujá`}</p>
                                        </div>

                                        <div className="select">
                                            <select>
                                                <option value="🟡 Pendente">🟡 Pendente</option>
                                                <option value="🟠 Preparando">🟠 Preparando</option>
                                                <option value="🟢 Entregue">🟢 Entregue</option>
                                                <option value="🔴 Cancelado">🔴 Cancelado</option>
                                            </select>
                                        </div>
                                    </BoxOrderMobile>
                                </>
                                :
                                <>
                                    <BoxOrderMobile>
                                        <div className="boxHeade">
                                            <div>
                                                <span>{`000004`}</span>
                                            </div>

                                            <div>
                                                <span>{`🟡 Pendentes`}</span>
                                            </div>

                                            <div>
                                                <span>{`20/05 às 18h00`}</span>
                                            </div>

                                        </div>

                                        <div>
                                            <p>{`1 x Salada Radish, 1 x Torradas de Parma, 1 x Chá de Canela, 1 x Suco de Maracujá`}</p>
                                        </div>

                                    </BoxOrderMobile>
                                    <BoxOrderMobile>
                                        <div className="boxHeade">
                                            <div>
                                                <span>{`000004`}</span>
                                            </div>

                                            <div>
                                                <span>{`🟠 Preparando`}</span>
                                            </div>

                                            <div>
                                                <span>{`20/05 às 18h00`}</span>
                                            </div>

                                        </div>

                                        <div>
                                            <p>{`1 x Salada Radish, 1 x Torradas de Parma, 1 x Chá de Canela, 1 x Suco de Maracujá`}</p>
                                        </div>

                                    </BoxOrderMobile>
                                    <BoxOrderMobile>
                                        <div className="boxHeade">
                                            <div>
                                                <span>{`000004`}</span>
                                            </div>

                                            <div>
                                                <span>{`🟢 Entregue`}</span>
                                            </div>

                                            <div>
                                                <span>{`20/05 às 18h00`}</span>
                                            </div>

                                        </div>

                                        <div>
                                            <p>{`1 x Salada Radish, 1 x Torradas de Parma, 1 x Chá de Canela, 1 x Suco de Maracujá`}</p>
                                        </div>

                                    </BoxOrderMobile>
                                    <BoxOrderMobile>
                                        <div className="boxHeade">
                                            <div>
                                                <span>{`000004`}</span>
                                            </div>

                                            <div>
                                                <span>{`🔴 Cancelado`}</span>
                                            </div>

                                            <div>
                                                <span>{`20/05 às 18h00`}</span>
                                            </div>

                                        </div>

                                        <div>
                                            <p>{`1 x Salada Radish, 1 x Torradas de Parma, 1 x Chá de Canela, 1 x Suco de Maracujá`}</p>
                                        </div>

                                    </BoxOrderMobile>


                                </>
                        }
                    </main >
                    :
                    <main>
                        {
                            isAdm ?
                                <BoxOrderDesktop>
                                    <h2>Histórico de pedidos</h2>
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>Status</th>
                                                <th>Código</th>
                                                <th>Detalhamento</th>
                                                <th>Data e hora</th>
                                            </tr>
                                        </thead>
                                        <tbody className="order">
                                            <tr>
                                                <td>
                                                    <div id="select">
                                                        <select>
                                                            <option value="🟡 Pendente">🟡 Pendente</option>
                                                            <option value="🟠 Preparando">🟠 Preparando</option>
                                                            <option value="🟢 Entregue">🟢 Entregue</option>
                                                            <option value="🔴 Cancelado">🔴 Cancelado</option>
                                                        </select>
                                                    </div>
                                                </td>
                                                <td>{`00000004`}</td>
                                                <td>{`1 x Salada Radish, 1 x Torradas de Parma, 1 x Chá de Canela, 1 x Suco de Maracujá`}</td>
                                                <td>{`20/05 às 18h00`}</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div id="select">
                                                        <select>
                                                            <option value="🟡 Pendente">🟡 Pendente</option>
                                                            <option value="🟠 Preparando">🟠 Preparando</option>
                                                            <option value="🟢 Entregue">🟢 Entregue</option>
                                                            <option value="🔴 Cancelado">🔴 Cancelado</option>
                                                        </select>
                                                    </div>
                                                </td>
                                                <td>{`00000004`}</td>
                                                <td>{`1 x Salada Radish, 1 x Torradas de Parma, 1 x Chá de Canela, 1 x Suco de Maracujá`}</td>
                                                <td>{`20/05 às 18h00`}</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div id="select">
                                                        <select>
                                                            <option value="🟡 Pendente">🟡 Pendente</option>
                                                            <option value="🟠 Preparando">🟠 Preparando</option>
                                                            <option value="🟢 Entregue">🟢 Entregue</option>
                                                            <option value="🔴 Cancelado">🔴 Cancelado</option>
                                                        </select>
                                                    </div>
                                                </td>
                                                <td>{`00000004`}</td>
                                                <td>{`1 x Salada Radish, 1 x Torradas de Parma, 1 x Chá de Canela, 1 x Suco de Maracujá`}</td>
                                                <td>{`20/05 às 18h00`}</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div id="select">
                                                        <select>
                                                            <option value="🟡 Pendente">🟡 Pendente</option>
                                                            <option value="🟠 Preparando">🟠 Preparando</option>
                                                            <option value="🟢 Entregue">🟢 Entregue</option>
                                                            <option value="🔴 Cancelado">🔴 Cancelado</option>
                                                        </select>
                                                    </div>
                                                </td>
                                                <td>{`00000004`}</td>
                                                <td>{`1 x Salada Radish, 1 x Torradas de Parma, 1 x Chá de Canela, 1 x Suco de Maracujá`}</td>
                                                <td>{`20/05 às 18h00`}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </BoxOrderDesktop>

                                :

                                <BoxOrderDesktop>
                                    <h2>Histórico de pedidos</h2>
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>Status</th>
                                                <th>Código</th>
                                                <th>Detalhamento</th>
                                                <th>Data e hora</th>
                                            </tr>
                                        </thead>
                                        <tbody className="order">
                                            <tr>
                                                <td>{`🟡 Pendente`}</td>
                                                <td>{`00000004`}</td>
                                                <td>{`1 x Salada Radish, 1 x Torradas de Parma, 1 x Chá de Canela, 1 x Suco de Maracujá`}</td>
                                                <td>{`20/05 às 18h00`}</td>
                                            </tr>
                                            <tr>
                                                <td>{`🟠 Preparando`}</td>
                                                <td>{`00000004`}</td>
                                                <td>{`1 x Salada Radish, 1 x Torradas de Parma, 1 x Chá de Canela, 1 x Suco de Maracujá`}</td>
                                                <td>{`20/05 às 18h00`}</td>
                                            </tr>
                                            <tr>
                                                <td>{`🟢 Entregue`}</td>
                                                <td>{`00000004`}</td>
                                                <td>{`1 x Salada Radish, 1 x Torradas de Parma, 1 x Chá de Canela, 1 x Suco de Maracujá`}</td>
                                                <td>{`20/05 às 18h00`}</td>
                                            </tr>
                                            <tr>
                                                <td>{`🔴 Cancelado`}</td>
                                                <td>{`00000004`}</td>
                                                <td>{`1 x Salada Radish, 1 x Torradas de Parma, 1 x Chá de Canela, 1 x Suco de Maracujá`}</td>
                                                <td>{`20/05 às 18h00`}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </BoxOrderDesktop>
                        }
                    </main>
            }
            <Footer />
        </Container >
    )
}