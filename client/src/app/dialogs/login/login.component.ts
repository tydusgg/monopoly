import { Component, Inject, Optional } from '@angular/core'
import { modalAnimation } from 'app/constants/animations.constants'
import { currentLang, lang } from 'app/constants/lang.constants'
import { LOGIN_DIALOG_DATA } from 'app/constants/tokens'
import { DialogComponent } from 'app/core/components/dialog/dialog.component'
import { DialogService } from 'app/core/services/dialog.service'
import { DialogData } from 'app/types/dialogs.types'

@Component({
  selector: 'dialog-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [modalAnimation]
})
export class LoginComponent extends DialogComponent {
  lang = lang[currentLang]

  constructor(
    dialogService: DialogService,
    @Optional()
    @Inject(LOGIN_DIALOG_DATA)
    public override dialogData: DialogData
  ) {
    super(dialogService)
    super.ngOnInit()
  }

  getGoogleAuthUrl() {
    window.location.href = 'http://localhost:7000/google'
  }
}