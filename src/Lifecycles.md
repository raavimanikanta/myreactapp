# React-LifeCycle Methods :
  ### There are three lifecycle methods in react 
    1.Mounting Phase
    2.Updating Phase
    3.UnMounting Phase

   ## Mounting Phase:
   When an instance of component is being created and inserted into the Dom.

    In mounting phase there are different types of methods
    1.Constructor()
      It is the function which gets invoked every time
      whenever we create a new Component.
    2.Static getDerivedStateFromProps:
      when state of the component depends on change in props.
      set the state
    3.render()
    It is the very important and only required method 
    it returns the jsx 
    Not performs the http requests
    4.ComponentDidMount:
     Invoked immediately after the component and the childcomponent have been  rendered to the Dom

  ## Updating Phase:
    In Updating phase there are different types of methods
    1.Static getDerivedStateFromProps
     when state of the component depends on change in props.
     set the state
    2.ShouldComponentUpdate
      It checks whether to re-render or not 
    3.render()
    It is the very important and only required method 
    it returns the jsx 
    4.getSnapShotBeforeUpdate
    This method is called right before the changes in the virtual dom is reflected to the real dom .
    It captures some information from the Dom 
    5.ComponentDidUpdate
    The method is called after the component is updated in the dom.
  ## Unmounting Phase:
    The method is invoked immediately  before the component is destroyed or unmounted.
     




  