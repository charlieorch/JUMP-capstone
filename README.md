# Project requirements
1. Add detailed instructions in README.md to build, run and test the project in local.
2. Dockerize the application and store the image on public Docker repository. Since you're working as a team, you can use anyone account to store the image or create one for your team. **THIS ONLY FOR DEVELOPMENT. FOR PRODUCTION RELEASE, YOU'LL USE ACR.**
3. Create a Kubernetes Cluster on Azure using Terraform and make sure that all your teammates have acces to it.
4. Create a namespace in the cluster where the application will be deployed
5. In the cluster:
    - Deploy the application in a dedicated namespace
    - Provide access to it from outside of the cluster using ingress controller. **NO NEED TO USE DNS NAME. PUBLIC IP WILL DO**. You can either install ingress controller or use the HTTP application routing. It's your choice.
7. Create an Azure DevOps pipeline to do the following:
    - Build:
        - Checkout code from your Github
        - Validate that the code does not have any coding violations
        - Validate that there are no compilation errors
        - Build the docker image
        - Store the Docker image on ACR
    - Release:
        - Deploy the application to dev, qa, stage and prod namespaces
8. Make sure that the service's Kubernetes manifests have liveness and readiness probes defined in them.
9. Update your README with the links to access the service in all the 4 environments

Follow all the standard development practices like reviewing pull requests, using development branches, use of ignore files to skip adding or copying unnecessary files etc.

Add the following files to the repo: (check [this](https://medium.com/code-factory-berlin/github-repository-structure-best-practices-248e6effc405) link)
1. License file
2. Contributors file
3. Support file
4. Pull request template file (nice to have)


# Extra credits
- A dashboard to monitor:
    - Response times from the application
    - Memory and CPU usage of PODs
- Use of Cache to store frequent responses
- Not copying the code from the learning repositories.
- Extensive documentation on how the application works
- Not using LOADBALANCER service type to expose the service outside the cluster.
- Using ticket numbers to track work. For this you can use the **Issues** in Github to create issues. Each issue is assigned a unique ID. Create a branch with that ID and work on it.
- Additional settings in the Github repo to ensure no one can merge to main branch directly.
- Detailed log messages in the code to be able to debug the application upon failures.
- Network diagram of the infrastructure
- Unit and integration tests
# Deliverables
Github repository for the project. Don't forget to add **saikiranchalla1** as the collaborator in the project.