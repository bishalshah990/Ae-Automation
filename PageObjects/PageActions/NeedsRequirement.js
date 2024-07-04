import { waitTheButton,type,clear } from "../BasePage/GeneralPage";

export class Ae_needs_reuirement{
    Re_Assign_Policy = 'div[id="caseload"]>fuse-action-panel>div>div>div:nth-of-type(2)>button:nth-of-type(1)>span:nth-of-type(1)>mat-icon'
    DiscordIcon = 'div[id="caseload"]>fuse-action-panel>div>div>div:nth-of-type(2)>button:nth-of-type(2)>span:nth-of-type(1)>mat-icon'
    Inbox = 'div[id="caseload"]>fuse-action-panel>div>div>div:nth-of-type(2)>button:nth-of-type(3)>span:nth-of-type(1)>mat-icon'
    Beneficiaries = 'div[id="caseload"]>fuse-action-panel>div>div>div:nth-of-type(2)>button:nth-of-type(4)>span:nth-of-type(1)>mat-icon'
    AdditionalInfor = 'div[id="caseload"]>fuse-action-panel>div>div>div:nth-of-type(2)>button:nth-of-type(5)>span:nth-of-type(1)>mat-icon'
    EventLog = 'div[id="caseload"]>fuse-action-panel>div>div>div:nth-of-type(2)>button:nth-of-type(6)>span:nth-of-type(1)>mat-icon'
    LockOut = 'div[id="caseload"]>fuse-action-panel>div>div>div:nth-of-type(2)>button:nth-of-type(7)>span:nth-of-type(1)>mat-icon'
    Assign_to_me = 'div[id="caseload"]>fuse-action-panel>div>div>div:nth-of-type(2)>button:nth-of-type(8)>span:nth-of-type(1)>mat-icon'
    BackButton = 'div[id="caseload"]>fuse-action-panel>div>div>div:nth-of-type(2)>button:nth-of-type(9)>span:nth-of-type(1)>mat-icon'


    waitNeedsRequirement(){
        waitTheButton(this.DiscordIcon)
        waitTheButton(this.Re_Assign_Policy)
        waitTheButton(this.Assign_to_me)
        waitTheButton(this.BackButton)
        cy.wait(3000)
    }
}