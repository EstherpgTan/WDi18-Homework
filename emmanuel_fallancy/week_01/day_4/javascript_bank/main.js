// Emmanuel 27102016

// Bank
//   Attr: accounts[]
//   Function: addAccount,
//             show total balance,
//             make some deposits,
//             make withdrawals,
// Have multiple accounts
//   Attr: owner, totalBalance



var bank = {
  accounts: [
              {
                owner: "A",
                totalBalance: 10000
              },
              {
                owner: "B",
                totalBalance: 200
              }
            ],
  addAccount: function ( account ) {
                this.accounts.push( account );
                console.log( account.owner + " created new account" );
              },
  showBalance: function ( owner ) {
                 for ( var i = 0; i < this.accounts.length; i++ ) {

                   // If the owner exist, return the balance
                   if ( this.accounts[ i ].owner === owner) {
                     return this.accounts[ i ].totalBalance;
                   }
                 }

                 // Otherwise, return null to indicate the user does not exist
                 return null;
               },
  depositToAccount: function ( amount, owner ) {
                      for ( var i = 0; i < this.accounts.length; i++ ) {

                         // if the owner exist, then deposit into his account
                         if ( this.accounts[ i ].owner === owner ) {
                              console.log( "Amount deposited to account "
                                           + owner
                                           + " is"
                                           , amount );
                              this.accounts[ i ].totalBalance += amount;

                              // Show the current balance
                              return this.showBalance( owner );
                         }
                      }

                      return null;
                    },
  withdrawFromAccount: function ( amount, owner ) {
                         for ( var i = 0; i < this.accounts.length; i++ ) {

                           // If the owner exist, then deduct from his balance
                           if ( this.accounts[ i ].owner === owner ) {
                                console.log( "Amount withdrawn from account "
                                             + owner
                                             + " is"
                                             , amount );
                                this.accounts[ i ].totalBalance -= amount;

                                // Show the new balance
                                return this.showBalance( owner );
                           }
                         }

                         return null;
                      }
};

// Creating new customer
var newAccount = {
  owner: "Emma",
  totalBalance: 500
};

// --- Scenario test ---

// Add new account
bank.addAccount( newAccount );

// Show account balance
console.log( "Account Emma balance is", bank.showBalance( "Emma" ) );
console.log( "Account A balance is", bank.showBalance( "A" ) );

// Show invalid person. Expecting a null if account does not exist
console.log( "Account EE does not exist. Therefore,", bank.showBalance( "EE" ) );

// Deposit and withdrawn
console.log( "Account A balance is", bank.depositToAccount( 400, "A" ) );
console.log( "Account Emma balance is", bank.withdrawFromAccount( 100, "Emma" ) );
