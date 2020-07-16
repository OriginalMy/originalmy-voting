"""
Forms for Helios
"""

from django import forms
from models import Election
from widgets import SplitSelectDateTimeWidget
from fields import SplitDateTimeField
from django.conf import settings


class ElectionForm(forms.Form):
  short_name = forms.SlugField(max_length=40, label="Nome curto", help_text='sem espacos, fara parte do URL da sua eleicao, por exemplo convencao-2020')
  name = forms.CharField(max_length=100, widget=forms.TextInput(attrs={'size':60}), label="Nome", help_text='o nome bonito para sua eleicao, por exemplo Eleicao do Conselho Administrativo 2010')
  description = forms.CharField(max_length=4000, label="Descricao", widget=forms.Textarea(attrs={'cols': 70, 'wrap': 'soft'}), required=False)
  election_type = forms.ChoiceField(label="Tipo", choices = Election.ELECTION_TYPES)
  use_voter_aliases = forms.BooleanField(required=False, label="Usar codinomes para eleitores", initial=False, help_text='Se selecionado, as identidades dos eleitores serao substituidas por codinomes, por exemplo "V12", no centro de rastreamento de votos')
  #use_advanced_audit_features = forms.BooleanField(required=False, initial=True, help_text='disable this only if you want a simple election with reduced security but a simpler user interface')
  randomize_answer_order = forms.BooleanField(required=False, label="Randomizar sequencia de voto", initial=False, help_text='ative isso se desejar que as respostas as perguntas aparecam em ordem aleatoria para cada eleitor')
  private_p = forms.BooleanField(required=False, initial=False, label="Eleicao Privada?", help_text='Uma eleicao privada e visivel apenas para os eleitores registrados.')
  help_email = forms.CharField(required=False, initial="", label="Email de contato", help_text='Email para que os eleitores possam contatar em caso de necessidade.')
  
  if settings.ALLOW_ELECTION_INFO_URL:
    election_info_url = forms.CharField(required=False, initial="", label="URL com Detalhes para esta Eleicao", help_text="o URL de um documento PDF que contem informacoes adicionais sobre a eleicao, por exemplo biografias e declaracoes de candidatos")
  
  # times
  voting_starts_at = SplitDateTimeField(label="Votacao inicia em", help_text = 'Data e hora UTC em que a votacao comeca',
                                   widget=SplitSelectDateTimeWidget, required=False)
  voting_ends_at = SplitDateTimeField(label="Votacao encerra em", help_text = 'Data e hora UTC em que a votacao termina',
                                   widget=SplitSelectDateTimeWidget, required=False)

class ElectionTimeExtensionForm(forms.Form):
  voting_extended_until = SplitDateTimeField(label="Estender votacao", help_text = 'Votacao estendida para data e hora do UTC',
                                   widget=SplitSelectDateTimeWidget, required=False)
  
class EmailVotersForm(forms.Form):
  subject = forms.CharField(label="Assunto" ,max_length=80)
  body = forms.CharField(label="Informacoes Extras", max_length=4000, widget=forms.Textarea, required=False)
  send_to = forms.ChoiceField(label="Enviar para", initial="todos", choices= [('todos', 'todos eleitores'), ('votaram', 'eleitores que ja votaram'), ('Nao votaram', 'eleitores que ainda nao votaram')])

class TallyNotificationEmailForm(forms.Form):
  subject = forms.CharField(label="Assunto", max_length=80)
  body = forms.CharField(label="Informacoes Extras", max_length=2000, widget=forms.Textarea, required=False)
  send_to = forms.ChoiceField(label="Enviar para", choices= [('todos', 'todos eleitores'), ('votaram', 'somente eleitores que votaram'), ('nenhum', 'nenhum -- tem certeza disso?')])

class VoterPasswordForm(forms.Form):
  voter_id = forms.CharField(max_length=50, label="ID do Eleitor")
  password = forms.CharField(widget=forms.PasswordInput(), max_length=100)

