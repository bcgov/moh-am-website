<template>
    <div class="request-integration">
        <h1>AM Keycloak Integration Request</h1>
        
        <div class="highlight">
            <fa class="exclamation" icon="circle-exclamation"/>
            <p>If you’re looking for more information on access management services and capabilities, please request an info session w the access management team. Before this session, please fill out the following form. </p>
            <a><router-link to="/integration-instructions">+ Request a session with the AM team</router-link></a>
        </div>
        <div class="information">
            <h3>Standard Funding Model</h3>
            <p>
                The IAM team and IDAM PMO has an established standard funding model which outlines the funding requirements of the IAM team and Client Application business area. This funding model may be adjusted on an application-by-application basis. The following information serves as a baseline, and guideline for the business area. Effort and funding requirements will need to be concretely established in the Engagement & Kick-off phases.
            </p>
            
            <table>
                <thead>
                    <tr>
                    <th width="100">Phase</th>
                    <th width="100">Required For</th>
                    <th width="100">IAM Team Effort in Hours (Min. Requirement)</th>
                    <th width="250">Funding Responsibility</th>    
                    <th width="250">Team Responsibility</th>

                    </tr>
                </thead>
                <tbody>
		<tr>
			<td>IAM Team Engagement</td>
			<td>All integrations</td>
			<td>5-10 hours</td>
			<td>IAM</td>
			<td>IAM/ Application Business Area</td>
		</tr>
		<tr>
			<td>Project Kick-off</td>
			<td>All integrations</td>
			<td>5-10 hours</td>
			<td>IAM</td>
			<td>IAM/ Application Business Area</td>
		</tr>
		<tr>
			<td>Requirements Analysis</td>
			<td>Med-High Complexity</td>
			<td>40-60 hours</td>
			<td>Application Business Area</td>
			<td>IAM</td>
		</tr>
		<tr>
			<td>Design Analysis</td>
			<td>Med-High Complexity</td>
			<td>40-60 hours</td>
			<td>Application Business Area</td>
			<td>IAM</td>
		</tr>
		<tr>
			<td>Keycloak Integration: Development and Configuration</td>
			<td>Low-High Complexity</td>
			<td>2-60 hours</td>
			<td>IAM/ Application Business Area</td>
			<td>IAM/ Application Business Area</td>
		</tr>
		<tr>
			<td>User Acceptance Testing (UAT)</td>
			<td>Low-High Complexity</td>
			<td>4-24 hours</td>
			<td>Application Business Area</td>
			<td>IAM/ Application Business Area</td>
		</tr>
		<tr>
			<td>Change Management</td>
			<td>Low-High Complexity</td>
			<td>4-24 hours</td>
			<td>Application Business Area</td>
			<td>Application Business Area</td>
		</tr>
	</tbody>
     
            </table>
        </div>
    </div>
</template>




<style scoped>
.highlight{
    background-color:#BCE4FF;
    padding: 14px;
    max-width: 700px;
    display:flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;

}

.highlight .exclamation {
    margin: 15px;
    font-size: 40px;
    color:#003366;
    background-color: white;
    border-radius: 20px;
}

.highlight p {
    max-width:600px;
    margin: 0 0 0 0;
    flex-grow: 1; 

}

.highlight a {
    color: black;
    font-weight: bold;
    background-color: #FCBA19;
    padding: 10px 10px;
    border-radius: 7px;
    margin: 14px 0;
    text-decoration: none;

    }
.information p{
    max-width: 900px;
    text-align: justify;

}
.information h3 {
    margin: 20px 0;
    font-weight: bold;

}

table  {
    font-size:14px ;
    margin: 40px 0 0 0;
    /* background-color: #FCBA19; */
}


th {
    border: 1px solid #003366;
    padding: 2px 5px;


}

td {
    border: 1px solid #003366;
    padding: 2px 5px;

}
</style>



