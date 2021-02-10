describe('User create new role',() =>{
    it('user login',()=>{
        cy.visit('http://devel.ekrut.com')
        cy.login({email:'dono@ekrut.com',pass:'testing123'})
    })
    it('User Checks URL', () => {
        cy.url()
        .should('eq','http://devel.ekrut.com/employer/dashboard')
    })
    it('User Clicks Role Menu', () => {
        cy.get('.ant-menu > :nth-child(4)')
        .should('be.visible')
        .click()
    })
    it('click button create role', ()=>{
        cy.get('.ant-btn').click()
    })
    it('User Checks URL', () => {
        cy.wait(1000)
        cy.url()
        .should('eq','http://devel.ekrut.com/employer/roles/new')
    })
    it('check Wording choose sourcing plan', ()=>{
        cy.get('.mb-1 > .jyQKuA').should('contain','Choose sourcing plans for your role')
    })
    it('check platform plan checked and disable for platform,and enabled for headhunting',()=>{
        cy.get('input[name="productPlatform"]').should('be.disabled','have.attr','checked')
        cy.get('input[name="productHeadhunting"]').should('be.enabled','have.attr','checked')    
    })
    it('input role name',()=>{
        cy.get('input[id="react-select-2-input"]').click({force: true}).type('pro')
        cy.get('.css-11unzgr > .css-yt9ioa-option').its('length').then(($lenght)=>{
            const randSelect = Cypress._.random(0, $lenght - 1);
            cy.get('.css-11unzgr > .css-yt9ioa-option').eq(randSelect).click()
        })
    })
    it('choose category',()=>{
        cy.findAllByText('Select Category').click()
        cy.get('.css-11unzgr > .css-yt9ioa-option').its('length').then(($lenght)=>{
            const randSelect = Cypress._.random(0, $lenght - 2);
            cy.get('.css-11unzgr > .css-yt9ioa-option').eq(randSelect).click()
        })
    })
    it('choose function',()=>{
        cy.findByText('Select Function').click()
        cy.get('.css-11unzgr > .css-yt9ioa-option').its('length').then(($lenght)=>{
            const randSelect = Cypress._.random(0, $lenght - 1);
            cy.get('.css-11unzgr > .css-yt9ioa-option').eq(randSelect).click()
        })
    })
    it('choose level',()=>{
        cy.findByText('Select Level').click()
        cy.get('.css-11unzgr > .css-yt9ioa-option').its('length').then(($lenght)=>{
            const randSelect = Cypress._.random(0, $lenght - 1);
            cy.get('.css-11unzgr > .css-yt9ioa-option').eq(randSelect).click()
        })
    })
    it('input/add exprience years',()=>{
        cy.findAllByRole('spinbutton').eq(0).type('1')
    })
    it('add number of vacation',()=>{
        cy.get('.ant-btn-link').eq(3).click()
    })
    it('input skill',()=>{
        var i = 0;
        for(i=0;i<4;i++){
            const randomchar = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 1);
            cy.get(':nth-child(9) > .eds-input-group > .eds-select > .eds-select__control > .eds-select__value-container').click().type(randomchar)
            cy.wait(1000)
            cy.get('.css-11unzgr > .css-yt9ioa-option').its('length').then(($lenght)=>{
                const randSelect = Cypress._.random(0, $lenght - 1);
                cy.get('.css-11unzgr > .css-yt9ioa-option').eq(randSelect).click()
            })
        }
    })
    it('click priority role',()=>{
        cy.get('.ant-switch').click()
    })
    it('add number of screening',()=>{
        cy.get('.ant-btn-link').eq(5).click()
    })
    it('budget suggestion ',()=>{
        cy.findByText('We have calculated the budget based on your requirements in General Information.').should('be.visible')
    })
    it('Budget type',()=>{
        cy.get('.ant-radio-group > .ant-radio-wrapper').eq(1).click()
    })
    it('Show Budget',()=>{
        cy.get('.ant-radio-group > .ant-radio-wrapper').eq(1).click()
    })
    it('filled Min budget',()=>{
        cy.get('input[name="budgetMin"]').type('10000000')
    })
    it('filled Max budget',()=>{
        cy.get('input[name="budgetMax"]').type('30000000')
    })
    it('Input Location',()=>{
        cy.get(':nth-child(3) > .col-md-8 > :nth-child(1) > :nth-child(2) > .eds-input-group > .eds-select > .eds-select__control > .eds-select__value-container').click().type('jakarta')
        cy.get('.css-11unzgr > .css-yt9ioa-option').its('length').then(($lenght)=>{
            const randSelect = Cypress._.random(0, $lenght - 1);
            cy.get('.css-11unzgr > .css-yt9ioa-option').eq(randSelect).click()
        })
    })
    // it('Gender',()=>{
    //     cy.get('')
    // })
    it('input min age',()=>{
        cy.get('input[name="ageMin"]').type('20')

    })
    it('input max age',()=>{
        cy.get('input[name="ageMax"]').type('35')
        
    })
    it('input min degree',()=>{
        cy.findByText('Select Minimum Degree').click()
        cy.get('.css-11unzgr > .css-yt9ioa-option').its('length').then(($lenght)=>{
            const randSelect = Cypress._.random(0, $lenght - 1);
            cy.get('.css-11unzgr > .css-yt9ioa-option').eq(randSelect).click()
        })
    })
    it('input minGpa and maxGpa',()=>{
        cy.get('input[name="gpaMin"]').type('3')
        cy.get('input[name="gpaMax"]').type('4')
    })
    it('input Role Description',()=>{
        cy.get('.public-DraftEditorPlaceholder-root').eq(0).type('Creating a clear and compelling job description will have you to attract the most qualified candidates for your role. A job description summarizes the essential responsibilities, activities, qualifications, and skills for a role.A job description summarizes the essential responsibilities, activities, qualifications, and skills for a role.')
    })
    it('input Job recruitment',()=>{
        cy.findByText('Job Requirements').type('Creating a clear and compelling job description will have you to attract the most qualified candidates for your role. A job description summarizes the essential responsibilities, activities, qualifications, and skills for a role.A job description summarizes the essential responsibilities, activities, qualifications, and skills for a role.')
        
                
    })
    it('input preffered industry',()=>{
        cy.findByText('Type in specific industries from which the candidates have exposure').click()
        cy.get('.css-11unzgr > .css-yt9ioa-option').its('length').then(($lenght)=>{
            const randSelect = Cypress._.random(0, $lenght - 1);
            cy.get('.css-11unzgr > .css-yt9ioa-option').eq(randSelect).click()
        })
        cy.screenshot
    })
    // it('click section notes to Ekrut consultant',()=>{
    //     cy.findByText('Notes to EKRUT Consultants').scrollTo('bottom')
    //     cy.get('.sc-eqIVtm').click()
    // })
    // it('Filled location',()=>{
    //     cy.get('textarea[name="consultant_location"]').click().type('Jakarta Headquarter')
    // })
    // it('filled Reason for vacancy',()=>{
    //     cy.get('textarea[name="consultant_reason_of_vacancy"]').type('Replacement and add new member')
    // })
    // it('add New vacancy headcount',()=>{
    //     cy.get('.ant-btn-link').eq(7).click()
    // })
    // it('add Replacement vacancy headcount',()=>{
    //     cy.get('.ant-btn-link').eq(9).click()
    // })
    // it('additional notes',()=>{
    //     cy.get('textarea[name="consultant_notes"]').type('Have good experience developing ')
    // })
    // it('role department',()=>{
    //     cy.get('input[name="consultant_department"]').type('Technology')
    // })
    // it('role division',()=>{
    //     cy.get('input[name="consultant_division"]').type('Software development product')
    // })
    // it('Add role team member',()=>{
    //     cy.get('.ant-btn-link').eq(11).click()
    // })
    // it('Reporting to ',()=>{
    //     cy.get('input[name="consultant_report"]').type('Jow')
    // })
    // it('User linkedin link',()=>{
    //     cy.get('input[name="consultant_linkedin"]').type('https://linkedin.com/joww')
    // })
    // it('select hiring stage',()=>{
    //     cy.findByText('1st stage action').click()
    //     cy.get('.css-11unzgr > .css-yt9ioa-option').its('length').then(($lenght)=>{
    //         const randSelect = Cypress._.random(0, $lenght - 1);
    //         cy.get('.css-11unzgr > .css-yt9ioa-option').eq(randSelect).click()
    //     })

    // })
    // it('input stage description',()=>{
    //     cy.get('textarea[name="consultant_hiring[0].consultant_hiring_desc]').type('Stage description needed')
    // })
    // it('Click add more hiring stage',()=>{
    //     cy.findByText('Add More Hiring Stage').click()
    // })
    // it('click button delete',()=>{
    //     cy.get('.sc-kjoXOD').click()
    // })
    // it('check benefit',()=>{
    //     cy.findByText('Free Lunch').click()
    //     cy.findByText('Dental Insurance').click()
    //     cy.findByText('Outings').click()
    //     cy.findByText('Remote Working').click()
    // })

    // //Laptop
    // it('Laptop not provide',()=>{
    //     cy.get('textarea[name="consultant_laptop_reason"]').type('10% salary')
    // })
    // //yes
    // it('Laptop provide',()=>{
    //     cy.get(':nth-child(16) > :nth-child(1) > .ant-radio-group > :nth-child(2) > .ant-radio > .ant-radio-inner').click()
    // })
    // it('input previous candidates specification',()=>{
    //     cy.get('textarea[name="consultant_benchmark"]').type('able to work under pressure')
    // })

    it('click button save',()=>{
        cy.get('button[type="submit"]').click()
    })

    // it('verify successfully create new role',()=>{
    //     cy.get('.ant-space > :nth-child(3) > .ant-typography').should('contain',`'Let's find and match the most relevant talents for this role'`)
    // })

})