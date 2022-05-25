<script>
import CollapsibleItem from '../components/CollapsibleItem.vue'
export default{
    data() {
        return {
            ExpandAbout:false,
            ExpandFAQ:false
        };
    },
    methods: {
        switchBoolean: function () {
            console.log("switch boolean called! current value is:");
            this.ExpandAbout = !this.ExpandAbout;
        }
    },
    components: { CollapsibleItem }
}
</script>


<template>
    <div class="flex-body">

          <div class="hook">
            <h1 class="title"> The AM Keycloak Vision </h1>
            <p class="quote">
Providing patients and providers ready access to the online resources they need and protecting resources from unauthorized requests            </p>
            <p>
                <a class="btn-request-integration"><router-link to="/request-integration">Request Keycloak Integration</router-link></a>

            </p>
        
            <hr size="" width="" color="">  
        </div>

        <div id="content">
            <div class="collapsible">
                <h3 class="title">About</h3>
                <ul class = "links">
                    <li v-on:click="this.ExpandAbout = false">Collapse All</li>
                    <li v-on:click="this.ExpandAbout = true">Expand All</li>
                </ul>
               
                <div class="list">
                    <CollapsibleItem :expandSection=ExpandAbout>
                    <template #question>What is AM/IDAM Keycloak?
</template>
                    <template #answer>
                        AM aims to develop and implement reusable user access management solutions (authentication and authorization). The project’s IAM Solutions are designed to provide users with a standardized method to securely access Ministry of Health and Health Sector partner applications.
                    </template>
                    </CollapsibleItem>
                    <CollapsibleItem :expandSection=ExpandAbout>
                        <template #question>Benefits</template>
                        <template #answer>
                            <b>Ministry of Health IDAM Standards:</b>
                            <br>
                            All IAM solutions are governed by the MoH IDAM strategic plan and compliant with MoH IDAM standards
                            <br><br>
                            <b>Open Source Technology:</b>
                            <ul>
                                <li> No licensing cost</li>
                                <li>Easier to implement technology enhancements</li>
                                <li>Rich in technical capabilities, which means a wide variety of identification and access management requirements can be met.</li>
                            </ul>
                            <br>
                            <b>(Expert) IAM project Team :</b>
                            <br>
                            Extensive access management skills and experience that client’s can leverage as needed and utilizes an Agile development approach, which reduces time for implementation.
                        </template>
                    </CollapsibleItem>
                    <CollapsibleItem :expandSection=ExpandAbout>
                        <template #question>Service Levels</template>
                        <template #answer>
                            The IAM team will respond to service requests and perform service activities from Monday through Friday during regular business hours (excluding statutory holidays)

                        </template>
                    </CollapsibleItem>
                    <CollapsibleItem :expandSection=ExpandAbout>
                        <template #question>Why AM? Why Not AM?</template>
                        <template #answer>
                            As we use keycloak, we can do Identity Brokering, Common Login Page, Single sign-on (SSO),Role Management,OpenID (OAuth), Account Linking, Service Accounts and UMA. 
                            <br>
                            We do not want to create a new type of credential, provide direct access to Identity Providers, and store passwords.
                        </template>
                    </CollapsibleItem>
                </div>
            </div>
            <div class="collapsible">
                                <h3 class="title">FAQ</h3>
                <ul class = "links">
                    <li v-on:click="this.ExpandFAQ = false">Collapse All</li>
                    <li v-on:click="this.ExpandFAQ = true">Expand All</li>
                </ul>
               
                <div class="list">
                    <CollapsibleItem :expandSection=ExpandFAQ>
                        <template #question>What does the architecture look like?</template>
                        <template #answer>
                            we have a simple diagram showing: Identity Providers -> Keycloak -> Applications
                        </template>
                    </CollapsibleItem>
                    <CollapsibleItem :expandSection=ExpandFAQ>
                        <template #question>Which Identity provider?</template>
                        <template #answer>
                            Several identity providers (IDP) are currently compatible with KeyCloak. The process for integrating these providers, which will be discussed in the IAM Process section, is the same. The following table provides an overview of User Communities, IDP’s and detail around ID Assurance Levels to be considered by the application Business Area team:
                            
                            
                            Provide a simple table that shows different IDPS.
                        </template>
                    </CollapsibleItem>
                    <CollapsibleItem :expandSection=ExpandFAQ>
                        <template #question>What's the process for updating my client?</template>
                        <template #answer>
                            If you would like to update your client, please contact us directly so that we can discuss this further.
                        </template>
                    </CollapsibleItem>
                    <CollapsibleItem :expandSection=ExpandFAQ>
                        <template #question>What is the process for user management?	</template>
                        <template #answer>
                            We should have a page about access teams and ministry guidelines (wiki/guide page).For more information, visit this page. 
                        </template>
                    </CollapsibleItem>
                    <CollapsibleItem :expandSection=ExpandFAQ>
                        <template #question>Is multi-factor authentication supported? Does my application need it?</template>
                        <template #answer>
                            Yes, MFA is supported. TBD: answer the second question
                        </template>
                    </CollapsibleItem>

                </div>
            </div>
        </div>
    </div>
</template>


<style scoped>
.flex-body {
    display: flex;
    flex-wrap: nowrap;
    flex-direction: column;
}


.hook .title {
    max-width:350px;
    color: #003366;

}

.hook .quote{
    max-width:550px; 
}

.hook .btn-request-integration a{
    background-color:#003366;
    color: white;
    padding: 7px 13px;
    border-radius: 3px;
    margin: 0 0 10px 0;
    border: none;
    font-size: 14px;
    text-decoration: none;
}

.hook .btn-request-integration:hover{
    background-color:#335372;
}

hr{
    color: #b2b2b2;
}
.collapsible{
    margin: 30px 0;
}

 .collapsible .title{
    font-size: 25px;
}
 .collapsible .links{
  padding: 0;
  display: flex;
  flex-wrap: wrap  
}
.collapsible .links li{
    color: #003366;
    font-weight: bold;
    font-size: 11px;
    margin: 0px 7px 0px 0px;
}


.collapsible .links li:hover{
    text-decoration: underline;
}

 .collapsible .list {
    max-width:800px;
}
.collapsible .list ul{
    margin: 0 0px 0 15px;
}

.collapsible .list li{
    list-style:disc;
}

</style>