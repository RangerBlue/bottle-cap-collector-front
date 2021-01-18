import React from 'react'

const ApiTable = (props) => {
    return (
        <div>
            <table class="table">
                <tbody>
                    <tr>
                        <th scope="row"></th>
                        <td>DESCRIPTION</td>
                        <td>{props.description}</td>
                    </tr>
                    <tr>
                        <th scope="row"></th>
                        <td>METHOD</td>
                        <td>{props.methods}</td>
                    </tr>
                    <tr>
                        <th scope="row"></th>
                        <td>AUTHENTICATION</td>
                        <td>{props.auth}</td>
                    </tr>
                    <tr>
                        <th scope="row"></th>
                        <td>PARAMETERS</td>
                        <td>{props.parameters}</td>
                    </tr>
                    <tr>
                        <th scope="row"></th>
                        <td>RETURNS</td>
                        <td>{props.returns}</td>
                    </tr>
                    <tr>
                        <th scope="row"></th>
                        <td colspan="2">EXAMPLE</td>
                    </tr>
                    <tr>
                        <th scope="row"></th>
                        <td colspan="2"><img src={props.request} class="img-fluid" alt="request"></img></td>
                    </tr>
                    <tr>
                        <th scope="row"></th>
                        <td colspan="2"> <img src={props.response} class="img-fluid" alt="response"></img></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
};

export default ApiTable


