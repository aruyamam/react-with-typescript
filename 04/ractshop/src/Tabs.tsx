import React, { Component } from 'react';

interface ITabsContext {
   activeName?: string;
   handleTabClick?: (name: string) => void;
}

const TabsContext = React.createContext<ITabsContext>({});

interface IState {
   activeName: string;
   activeContent: React.ReactNode;
}

interface ITabProps {
   name: string;
   initialActive?: boolean;
}

class Tabs extends Component<{}, IState> {
   public static Tab: React.SFC<ITabProps> = ({
      initialActive,
      name,
      children
   }) => (
      <TabsContext.Consumer>
         {(context: ITabsContext) => {
            const activeName = context.activeName
               ? context.activeName
               : initialActive
               ? name
               : '';
            const handleTabClick = (e: React.MouseEvent<HTMLLIElement>) => {
               if (context.handleTabClick) {
                  context.handleTabClick(name);
               }
            };

            return (
               <li
                  onClick={handleTabClick}
                  className={name === activeName ? 'active' : ''}
               >
                  {children}
               </li>
            );
         }}
      </TabsContext.Consumer>
   );

   public render() {
      const { children } = this.props;

      return (
         <TabsContext.Provider
            value={{
               activeName: this.state ? this.state.activeName : '',
               handleTabClick: this.handleTabClick
            }}
         >
            <ul className="tabs">{children}</ul>
         </TabsContext.Provider>
      );
   }

   private handleTabClick = (name: string) => {
      this.setState({ activeName: name });
   };
}

export default Tabs;
